package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OauthAuthorizationsUpdateAuthorizationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_scopes")
    public String[] addScopes;
    public OauthAuthorizationsUpdateAuthorizationRequestBody withAddScopes(String[] addScopes) {
        this.addScopes = addScopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public OauthAuthorizationsUpdateAuthorizationRequestBody withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public OauthAuthorizationsUpdateAuthorizationRequestBody withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note_url")
    public String noteUrl;
    public OauthAuthorizationsUpdateAuthorizationRequestBody withNoteUrl(String noteUrl) {
        this.noteUrl = noteUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remove_scopes")
    public String[] removeScopes;
    public OauthAuthorizationsUpdateAuthorizationRequestBody withRemoveScopes(String[] removeScopes) {
        this.removeScopes = removeScopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String[] scopes;
    public OauthAuthorizationsUpdateAuthorizationRequestBody withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
}