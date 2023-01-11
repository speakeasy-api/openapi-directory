package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GrantAccessResult
 * Contains the response to a <code>GrantAccess</code> request.
**/
public class GrantAccessResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemporaryCredential")
    public TemporaryCredential temporaryCredential;
    public GrantAccessResult withTemporaryCredential(TemporaryCredential temporaryCredential) {
        this.temporaryCredential = temporaryCredential;
        return this;
    }
}