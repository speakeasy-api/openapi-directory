package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RequestServiceQuotaIncreaseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestedQuota")
    public RequestedServiceQuotaChange requestedQuota;
    public RequestServiceQuotaIncreaseResponse withRequestedQuota(RequestedServiceQuotaChange requestedQuota) {
        this.requestedQuota = requestedQuota;
        return this;
    }
}