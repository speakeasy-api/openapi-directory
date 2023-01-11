package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutServiceQuotaIncreaseRequestIntoTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceQuotaIncreaseRequestInTemplate")
    public ServiceQuotaIncreaseRequestInTemplate serviceQuotaIncreaseRequestInTemplate;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withServiceQuotaIncreaseRequestInTemplate(ServiceQuotaIncreaseRequestInTemplate serviceQuotaIncreaseRequestInTemplate) {
        this.serviceQuotaIncreaseRequestInTemplate = serviceQuotaIncreaseRequestInTemplate;
        return this;
    }
}