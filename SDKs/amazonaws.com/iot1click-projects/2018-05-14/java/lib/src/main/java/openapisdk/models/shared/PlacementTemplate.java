package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlacementTemplate
 * An object defining the template for a placement.
**/
public class PlacementTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAttributes")
    public java.util.Map<String, String> defaultAttributes;
    public PlacementTemplate withDefaultAttributes(java.util.Map<String, String> defaultAttributes) {
        this.defaultAttributes = defaultAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceTemplates")
    public java.util.Map<String, DeviceTemplate> deviceTemplates;
    public PlacementTemplate withDeviceTemplates(java.util.Map<String, DeviceTemplate> deviceTemplates) {
        this.deviceTemplates = deviceTemplates;
        return this;
    }
}