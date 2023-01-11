package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeletePendingAggregationRequestRequest {
    @JsonProperty("RequesterAccountId")
    public String requesterAccountId;
    public DeletePendingAggregationRequestRequest withRequesterAccountId(String requesterAccountId) {
        this.requesterAccountId = requesterAccountId;
        return this;
    }
    @JsonProperty("RequesterAwsRegion")
    public String requesterAwsRegion;
    public DeletePendingAggregationRequestRequest withRequesterAwsRegion(String requesterAwsRegion) {
        this.requesterAwsRegion = requesterAwsRegion;
        return this;
    }
}