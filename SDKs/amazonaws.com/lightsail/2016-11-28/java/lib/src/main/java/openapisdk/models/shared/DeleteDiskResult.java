package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteDiskResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public Operation[] operations;
    public DeleteDiskResult withOperations(Operation[] operations) {
        this.operations = operations;
        return this;
    }
}