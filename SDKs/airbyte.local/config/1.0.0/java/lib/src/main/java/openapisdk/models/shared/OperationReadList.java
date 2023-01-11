package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OperationReadList {
    @JsonProperty("operations")
    public OperationRead[] operations;
    public OperationReadList withOperations(OperationRead[] operations) {
        this.operations = operations;
        return this;
    }
}