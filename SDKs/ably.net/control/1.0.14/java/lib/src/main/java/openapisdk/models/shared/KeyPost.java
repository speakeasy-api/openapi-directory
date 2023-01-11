package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class KeyPost {
    @JsonProperty("capabilities")
    public KeyPostCapabilitiesEnum[] capabilities;
    public KeyPost withCapabilities(KeyPostCapabilitiesEnum[] capabilities) {
        this.capabilities = capabilities;
        return this;
    }
    @JsonProperty("channels")
    public String channels;
    public KeyPost withChannels(String channels) {
        this.channels = channels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public KeyPost withName(String name) {
        this.name = name;
        return this;
    }
}