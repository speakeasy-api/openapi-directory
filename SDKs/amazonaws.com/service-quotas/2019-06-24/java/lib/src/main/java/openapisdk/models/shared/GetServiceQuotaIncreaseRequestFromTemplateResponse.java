package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServiceQuotaIncreaseRequestFromTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceQuotaIncreaseRequestInTemplate")
    public ServiceQuotaIncreaseRequestInTemplate serviceQuotaIncreaseRequestInTemplate;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withServiceQuotaIncreaseRequestInTemplate(ServiceQuotaIncreaseRequestInTemplate serviceQuotaIncreaseRequestInTemplate) {
        this.serviceQuotaIncreaseRequestInTemplate = serviceQuotaIncreaseRequestInTemplate;
        return this;
    }
}