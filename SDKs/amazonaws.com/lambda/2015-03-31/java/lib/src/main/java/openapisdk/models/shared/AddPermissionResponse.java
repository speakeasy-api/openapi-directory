package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddPermissionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Statement")
    public String statement;
    public AddPermissionResponse withStatement(String statement) {
        this.statement = statement;
        return this;
    }
}