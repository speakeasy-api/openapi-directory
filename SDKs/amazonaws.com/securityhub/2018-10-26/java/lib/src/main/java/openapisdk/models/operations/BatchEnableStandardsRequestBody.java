package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchEnableStandardsRequestBody {
    @JsonProperty("StandardsSubscriptionRequests")
    public openapisdk.models.shared.StandardsSubscriptionRequest[] standardsSubscriptionRequests;
    public BatchEnableStandardsRequestBody withStandardsSubscriptionRequests(openapisdk.models.shared.StandardsSubscriptionRequest[] standardsSubscriptionRequests) {
        this.standardsSubscriptionRequests = standardsSubscriptionRequests;
        return this;
    }
}