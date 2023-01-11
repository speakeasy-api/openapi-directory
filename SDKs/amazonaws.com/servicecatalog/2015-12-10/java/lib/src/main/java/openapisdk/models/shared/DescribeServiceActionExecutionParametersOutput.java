package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeServiceActionExecutionParametersOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceActionParameters")
    public ExecutionParameter[] serviceActionParameters;
    public DescribeServiceActionExecutionParametersOutput withServiceActionParameters(ExecutionParameter[] serviceActionParameters) {
        this.serviceActionParameters = serviceActionParameters;
        return this;
    }
}