package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProvisionedProductPlansOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListProvisionedProductPlansOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedProductPlans")
    public ProvisionedProductPlanSummary[] provisionedProductPlans;
    public ListProvisionedProductPlansOutput withProvisionedProductPlans(ProvisionedProductPlanSummary[] provisionedProductPlans) {
        this.provisionedProductPlans = provisionedProductPlans;
        return this;
    }
}