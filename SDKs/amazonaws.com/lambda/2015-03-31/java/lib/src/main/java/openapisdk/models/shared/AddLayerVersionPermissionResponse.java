package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddLayerVersionPermissionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevisionId")
    public String revisionId;
    public AddLayerVersionPermissionResponse withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Statement")
    public String statement;
    public AddLayerVersionPermissionResponse withStatement(String statement) {
        this.statement = statement;
        return this;
    }
}