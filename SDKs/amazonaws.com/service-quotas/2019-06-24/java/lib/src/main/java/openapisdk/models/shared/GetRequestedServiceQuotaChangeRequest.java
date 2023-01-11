package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRequestedServiceQuotaChangeRequest {
    @JsonProperty("RequestId")
    public String requestId;
    public GetRequestedServiceQuotaChangeRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}