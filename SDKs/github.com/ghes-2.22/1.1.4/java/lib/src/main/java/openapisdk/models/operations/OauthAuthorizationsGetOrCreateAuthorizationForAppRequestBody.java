package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody {
    @JsonProperty("client_secret")
    public String clientSecret;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note_url")
    public String noteUrl;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody withNoteUrl(String noteUrl) {
        this.noteUrl = noteUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String[] scopes;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
}