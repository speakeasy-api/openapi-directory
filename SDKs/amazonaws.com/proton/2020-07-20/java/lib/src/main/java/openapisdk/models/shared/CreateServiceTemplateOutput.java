package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateServiceTemplateOutput {
    @JsonProperty("serviceTemplate")
    public ServiceTemplate serviceTemplate;
    public CreateServiceTemplateOutput withServiceTemplate(ServiceTemplate serviceTemplate) {
        this.serviceTemplate = serviceTemplate;
        return this;
    }
}