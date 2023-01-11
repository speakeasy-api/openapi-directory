package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAwsDefaultServiceQuotaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quota")
    public ServiceQuota quota;
    public GetAwsDefaultServiceQuotaResponse withQuota(ServiceQuota quota) {
        this.quota = quota;
        return this;
    }
}