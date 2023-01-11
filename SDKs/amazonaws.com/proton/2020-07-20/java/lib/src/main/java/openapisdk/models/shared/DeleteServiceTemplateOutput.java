package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteServiceTemplateOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceTemplate")
    public ServiceTemplate serviceTemplate;
    public DeleteServiceTemplateOutput withServiceTemplate(ServiceTemplate serviceTemplate) {
        this.serviceTemplate = serviceTemplate;
        return this;
    }
}