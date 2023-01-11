package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServiceTemplateVersionOutput {
    @JsonProperty("serviceTemplateVersion")
    public ServiceTemplateVersion serviceTemplateVersion;
    public GetServiceTemplateVersionOutput withServiceTemplateVersion(ServiceTemplateVersion serviceTemplateVersion) {
        this.serviceTemplateVersion = serviceTemplateVersion;
        return this;
    }
}