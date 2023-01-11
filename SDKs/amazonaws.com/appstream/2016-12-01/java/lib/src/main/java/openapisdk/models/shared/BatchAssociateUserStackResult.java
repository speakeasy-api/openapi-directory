package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchAssociateUserStackResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public UserStackAssociationError[] errors;
    public BatchAssociateUserStackResult withErrors(UserStackAssociationError[] errors) {
        this.errors = errors;
        return this;
    }
}