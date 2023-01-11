package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody {
    @JsonProperty("client_secret")
    public String clientSecret;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note_url")
    public String noteUrl;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody withNoteUrl(String noteUrl) {
        this.noteUrl = noteUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String[] scopes;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
}