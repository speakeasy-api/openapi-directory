package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class KeyPatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilities")
    public KeyPatchCapabilitiesEnum[] capabilities;
    public KeyPatch withCapabilities(KeyPatchCapabilitiesEnum[] capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
    public String channels;
    public KeyPatch withChannels(String channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public KeyPatch withName(String name) {
        this.name = name;
        return this;
    }
}