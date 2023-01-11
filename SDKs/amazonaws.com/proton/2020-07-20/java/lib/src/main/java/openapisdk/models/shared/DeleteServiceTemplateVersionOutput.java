package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteServiceTemplateVersionOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceTemplateVersion")
    public ServiceTemplateVersion serviceTemplateVersion;
    public DeleteServiceTemplateVersionOutput withServiceTemplateVersion(ServiceTemplateVersion serviceTemplateVersion) {
        this.serviceTemplateVersion = serviceTemplateVersion;
        return this;
    }
}