package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OauthAuthorizationsCreateAuthorizationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public OauthAuthorizationsCreateAuthorizationRequestBody withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_secret")
    public String clientSecret;
    public OauthAuthorizationsCreateAuthorizationRequestBody withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public OauthAuthorizationsCreateAuthorizationRequestBody withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public OauthAuthorizationsCreateAuthorizationRequestBody withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note_url")
    public String noteUrl;
    public OauthAuthorizationsCreateAuthorizationRequestBody withNoteUrl(String noteUrl) {
        this.noteUrl = noteUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String[] scopes;
    public OauthAuthorizationsCreateAuthorizationRequestBody withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
}