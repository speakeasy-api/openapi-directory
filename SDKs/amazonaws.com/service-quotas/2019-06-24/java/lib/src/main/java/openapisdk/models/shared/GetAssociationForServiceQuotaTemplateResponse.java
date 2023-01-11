package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAssociationForServiceQuotaTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceQuotaTemplateAssociationStatus")
    public ServiceQuotaTemplateAssociationStatusEnum serviceQuotaTemplateAssociationStatus;
    public GetAssociationForServiceQuotaTemplateResponse withServiceQuotaTemplateAssociationStatus(ServiceQuotaTemplateAssociationStatusEnum serviceQuotaTemplateAssociationStatus) {
        this.serviceQuotaTemplateAssociationStatus = serviceQuotaTemplateAssociationStatus;
        return this;
    }
}