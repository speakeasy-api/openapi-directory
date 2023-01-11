package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConstraintOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConstraintDetail")
    public ConstraintDetail constraintDetail;
    public DescribeConstraintOutput withConstraintDetail(ConstraintDetail constraintDetail) {
        this.constraintDetail = constraintDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConstraintParameters")
    public String constraintParameters;
    public DescribeConstraintOutput withConstraintParameters(String constraintParameters) {
        this.constraintParameters = constraintParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public StatusEnum status;
    public DescribeConstraintOutput withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
}