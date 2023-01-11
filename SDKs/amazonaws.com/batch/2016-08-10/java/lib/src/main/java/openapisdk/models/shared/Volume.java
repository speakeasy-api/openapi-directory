package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Volume
 * A data volume used in a job's container properties.
**/
public class Volume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("efsVolumeConfiguration")
    public EfsVolumeConfiguration efsVolumeConfiguration;
    public Volume withEfsVolumeConfiguration(EfsVolumeConfiguration efsVolumeConfiguration) {
        this.efsVolumeConfiguration = efsVolumeConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public Host host;
    public Volume withHost(Host host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Volume withName(String name) {
        this.name = name;
        return this;
    }
}