package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateProjectRequestBodyPlacementTemplate
 * An object defining the template for a placement.
**/
public class CreateProjectRequestBodyPlacementTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAttributes")
    public java.util.Map<String, String> defaultAttributes;
    public CreateProjectRequestBodyPlacementTemplate withDefaultAttributes(java.util.Map<String, String> defaultAttributes) {
        this.defaultAttributes = defaultAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceTemplates")
    public java.util.Map<String, openapisdk.models.shared.DeviceTemplate> deviceTemplates;
    public CreateProjectRequestBodyPlacementTemplate withDeviceTemplates(java.util.Map<String, openapisdk.models.shared.DeviceTemplate> deviceTemplates) {
        this.deviceTemplates = deviceTemplates;
        return this;
    }
}