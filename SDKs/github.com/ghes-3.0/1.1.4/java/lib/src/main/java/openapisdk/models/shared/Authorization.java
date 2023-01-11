package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Authorization
 * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
**/
public class Authorization {
    @JsonProperty("app")
    public AuthorizationApp app;
    public Authorization withApp(AuthorizationApp app) {
        this.app = app;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Authorization withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("fingerprint")
    public String fingerprint;
    public Authorization withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonProperty("hashed_token")
    public String hashedToken;
    public Authorization withHashedToken(String hashedToken) {
        this.hashedToken = hashedToken;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Authorization withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installation")
    public AuthorizationScopedInstallation installation;
    public Authorization withInstallation(AuthorizationScopedInstallation installation) {
        this.installation = installation;
        return this;
    }
    @JsonProperty("note")
    public String note;
    public Authorization withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonProperty("note_url")
    public String noteUrl;
    public Authorization withNoteUrl(String noteUrl) {
        this.noteUrl = noteUrl;
        return this;
    }
    @JsonProperty("scopes")
    public String[] scopes;
    public Authorization withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
    @JsonProperty("token")
    public String token;
    public Authorization withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonProperty("token_last_eight")
    public String tokenLastEight;
    public Authorization withTokenLastEight(String tokenLastEight) {
        this.tokenLastEight = tokenLastEight;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Authorization withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Authorization withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public AuthorizationSimpleUser user;
    public Authorization withUser(AuthorizationSimpleUser user) {
        this.user = user;
        return this;
    }
}