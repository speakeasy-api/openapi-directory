package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConstraintOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConstraintDetail")
    public ConstraintDetail constraintDetail;
    public CreateConstraintOutput withConstraintDetail(ConstraintDetail constraintDetail) {
        this.constraintDetail = constraintDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConstraintParameters")
    public String constraintParameters;
    public CreateConstraintOutput withConstraintParameters(String constraintParameters) {
        this.constraintParameters = constraintParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public StatusEnum status;
    public CreateConstraintOutput withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
}