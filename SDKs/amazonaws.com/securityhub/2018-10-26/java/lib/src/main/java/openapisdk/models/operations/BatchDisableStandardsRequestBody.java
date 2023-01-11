package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDisableStandardsRequestBody {
    @JsonProperty("StandardsSubscriptionArns")
    public String[] standardsSubscriptionArns;
    public BatchDisableStandardsRequestBody withStandardsSubscriptionArns(String[] standardsSubscriptionArns) {
        this.standardsSubscriptionArns = standardsSubscriptionArns;
        return this;
    }
}