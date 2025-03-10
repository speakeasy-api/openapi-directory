/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * NullableAuthorization - The authorization for an OAuth app, GitHub App, or a Personal Access Token.
 */
public class NullableAuthorization {
    @JsonProperty("app")
    public NullableAuthorizationApp app;

    public NullableAuthorization withApp(NullableAuthorizationApp app) {
        this.app = app;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;

    public NullableAuthorization withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    @JsonProperty("fingerprint")
    public String fingerprint;

    public NullableAuthorization withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    
    @JsonProperty("hashed_token")
    public String hashedToken;

    public NullableAuthorization withHashedToken(String hashedToken) {
        this.hashedToken = hashedToken;
        return this;
    }
    
    @JsonProperty("id")
    public Long id;

    public NullableAuthorization withId(Long id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installation")
    public NullableScopedInstallation installation;

    public NullableAuthorization withInstallation(NullableScopedInstallation installation) {
        this.installation = installation;
        return this;
    }
    
    @JsonProperty("note")
    public String note;

    public NullableAuthorization withNote(String note) {
        this.note = note;
        return this;
    }
    
    @JsonProperty("note_url")
    public String noteUrl;

    public NullableAuthorization withNoteUrl(String noteUrl) {
        this.noteUrl = noteUrl;
        return this;
    }
    
    /**
     * A list of scopes that this authorization is in.
     */
    @JsonProperty("scopes")
    public String[] scopes;

    public NullableAuthorization withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
    
    @JsonProperty("token")
    public String token;

    public NullableAuthorization withToken(String token) {
        this.token = token;
        return this;
    }
    
    @JsonProperty("token_last_eight")
    public String tokenLastEight;

    public NullableAuthorization withTokenLastEight(String tokenLastEight) {
        this.tokenLastEight = tokenLastEight;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;

    public NullableAuthorization withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    
    @JsonProperty("url")
    public String url;

    public NullableAuthorization withUrl(String url) {
        this.url = url;
        return this;
    }
    
    /**
     * Simple User
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public NullableSimpleUser user;

    public NullableAuthorization withUser(NullableSimpleUser user) {
        this.user = user;
        return this;
    }
    
    public NullableAuthorization(@JsonProperty("app") NullableAuthorizationApp app, @JsonProperty("created_at") OffsetDateTime createdAt, @JsonProperty("fingerprint") String fingerprint, @JsonProperty("hashed_token") String hashedToken, @JsonProperty("id") Long id, @JsonProperty("note") String note, @JsonProperty("note_url") String noteUrl, @JsonProperty("scopes") String[] scopes, @JsonProperty("token") String token, @JsonProperty("token_last_eight") String tokenLastEight, @JsonProperty("updated_at") OffsetDateTime updatedAt, @JsonProperty("url") String url) {
        this.app = app;
        this.createdAt = createdAt;
        this.fingerprint = fingerprint;
        this.hashedToken = hashedToken;
        this.id = id;
        this.note = note;
        this.noteUrl = noteUrl;
        this.scopes = scopes;
        this.token = token;
        this.tokenLastEight = tokenLastEight;
        this.updatedAt = updatedAt;
        this.url = url;
  }
}
