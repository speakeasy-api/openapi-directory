package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutPermissionRequestBody {
    @JsonProperty("principals")
    public String[] principals;
    public PutPermissionRequestBody withPrincipals(String[] principals) {
        this.principals = principals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public PutPermissionRequestBody withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}