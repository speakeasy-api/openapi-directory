package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateServiceTemplateOutput {
    @JsonProperty("serviceTemplate")
    public ServiceTemplate serviceTemplate;
    public UpdateServiceTemplateOutput withServiceTemplate(ServiceTemplate serviceTemplate) {
        this.serviceTemplate = serviceTemplate;
        return this;
    }
}