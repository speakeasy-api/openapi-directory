package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAppliedSchemaVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppliedSchemaArn")
    public String appliedSchemaArn;
    public GetAppliedSchemaVersionResponse withAppliedSchemaArn(String appliedSchemaArn) {
        this.appliedSchemaArn = appliedSchemaArn;
        return this;
    }
}