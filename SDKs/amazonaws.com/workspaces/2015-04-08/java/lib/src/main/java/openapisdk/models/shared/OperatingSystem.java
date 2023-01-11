package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperatingSystem
 * The operating system that the image is running.
**/
public class OperatingSystem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public OperatingSystemTypeEnum type;
    public OperatingSystem withType(OperatingSystemTypeEnum type) {
        this.type = type;
        return this;
    }
}