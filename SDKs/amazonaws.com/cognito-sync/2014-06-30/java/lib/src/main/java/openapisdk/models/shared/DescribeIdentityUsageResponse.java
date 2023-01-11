package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeIdentityUsageResponse
 * The response to a successful DescribeIdentityUsage request.
**/
public class DescribeIdentityUsageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityUsage")
    public IdentityUsage identityUsage;
    public DescribeIdentityUsageResponse withIdentityUsage(IdentityUsage identityUsage) {
        this.identityUsage = identityUsage;
        return this;
    }
}