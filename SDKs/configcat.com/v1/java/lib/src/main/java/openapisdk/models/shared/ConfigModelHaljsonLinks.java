package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigModelHaljsonLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public String self;
    public ConfigModelHaljsonLinks withSelf(String self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public String settings;
    public ConfigModelHaljsonLinks withSettings(String settings) {
        this.settings = settings;
        return this;
    }
}