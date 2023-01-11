package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AppsCheckAuthorizationAuthorization
 * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
**/
public class AppsCheckAuthorizationAuthorization {
    @JsonProperty("app")
    public AppsCheckAuthorizationAuthorizationApp app;
    public AppsCheckAuthorizationAuthorization withApp(AppsCheckAuthorizationAuthorizationApp app) {
        this.app = app;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public AppsCheckAuthorizationAuthorization withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("fingerprint")
    public String fingerprint;
    public AppsCheckAuthorizationAuthorization withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonProperty("hashed_token")
    public String hashedToken;
    public AppsCheckAuthorizationAuthorization withHashedToken(String hashedToken) {
        this.hashedToken = hashedToken;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public AppsCheckAuthorizationAuthorization withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installation")
    public AppsCheckAuthorizationAuthorizationScopedInstallation installation;
    public AppsCheckAuthorizationAuthorization withInstallation(AppsCheckAuthorizationAuthorizationScopedInstallation installation) {
        this.installation = installation;
        return this;
    }
    @JsonProperty("note")
    public String note;
    public AppsCheckAuthorizationAuthorization withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonProperty("note_url")
    public String noteUrl;
    public AppsCheckAuthorizationAuthorization withNoteUrl(String noteUrl) {
        this.noteUrl = noteUrl;
        return this;
    }
    @JsonProperty("scopes")
    public String[] scopes;
    public AppsCheckAuthorizationAuthorization withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
    @JsonProperty("token")
    public String token;
    public AppsCheckAuthorizationAuthorization withToken(String token) {
        this.token = token;
        return this;
    }
    @JsonProperty("token_last_eight")
    public String tokenLastEight;
    public AppsCheckAuthorizationAuthorization withTokenLastEight(String tokenLastEight) {
        this.tokenLastEight = tokenLastEight;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public AppsCheckAuthorizationAuthorization withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public AppsCheckAuthorizationAuthorization withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public AppsCheckAuthorizationAuthorizationSimpleUser user;
    public AppsCheckAuthorizationAuthorization withUser(AppsCheckAuthorizationAuthorizationSimpleUser user) {
        this.user = user;
        return this;
    }
}