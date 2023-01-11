package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeServiceErrorsResult
 * Contains the response to a <code>DescribeServiceErrors</code> request.
**/
public class DescribeServiceErrorsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceErrors")
    public ServiceError[] serviceErrors;
    public DescribeServiceErrorsResult withServiceErrors(ServiceError[] serviceErrors) {
        this.serviceErrors = serviceErrors;
        return this;
    }
}