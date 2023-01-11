package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeProvisionedProductPlanOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public DescribeProvisionedProductPlanOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedProductPlanDetails")
    public ProvisionedProductPlanDetails provisionedProductPlanDetails;
    public DescribeProvisionedProductPlanOutput withProvisionedProductPlanDetails(ProvisionedProductPlanDetails provisionedProductPlanDetails) {
        this.provisionedProductPlanDetails = provisionedProductPlanDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceChanges")
    public ResourceChange[] resourceChanges;
    public DescribeProvisionedProductPlanOutput withResourceChanges(ResourceChange[] resourceChanges) {
        this.resourceChanges = resourceChanges;
        return this;
    }
}