package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateServiceTemplateVersionOutput {
    @JsonProperty("serviceTemplateVersion")
    public ServiceTemplateVersion serviceTemplateVersion;
    public UpdateServiceTemplateVersionOutput withServiceTemplateVersion(ServiceTemplateVersion serviceTemplateVersion) {
        this.serviceTemplateVersion = serviceTemplateVersion;
        return this;
    }
}