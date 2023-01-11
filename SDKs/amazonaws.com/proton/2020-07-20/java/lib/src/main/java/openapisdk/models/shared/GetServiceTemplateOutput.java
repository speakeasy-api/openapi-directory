package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServiceTemplateOutput {
    @JsonProperty("serviceTemplate")
    public ServiceTemplate serviceTemplate;
    public GetServiceTemplateOutput withServiceTemplate(ServiceTemplate serviceTemplate) {
        this.serviceTemplate = serviceTemplate;
        return this;
    }
}