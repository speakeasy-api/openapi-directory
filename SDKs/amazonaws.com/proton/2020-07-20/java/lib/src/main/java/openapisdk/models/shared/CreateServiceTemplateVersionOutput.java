package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateServiceTemplateVersionOutput {
    @JsonProperty("serviceTemplateVersion")
    public ServiceTemplateVersion serviceTemplateVersion;
    public CreateServiceTemplateVersionOutput withServiceTemplateVersion(ServiceTemplateVersion serviceTemplateVersion) {
        this.serviceTemplateVersion = serviceTemplateVersion;
        return this;
    }
}