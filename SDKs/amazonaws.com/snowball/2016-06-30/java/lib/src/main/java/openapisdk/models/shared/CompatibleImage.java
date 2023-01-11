package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompatibleImage
 * A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snow device AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device.
**/
public class CompatibleImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AmiId")
    public String amiId;
    public CompatibleImage withAmiId(String amiId) {
        this.amiId = amiId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CompatibleImage withName(String name) {
        this.name = name;
        return this;
    }
}