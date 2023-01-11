package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputResources
 * The resources produced by this image.
**/
public class OutputResources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amis")
    public Ami[] amis;
    public OutputResources withAmis(Ami[] amis) {
        this.amis = amis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public Container[] containers;
    public OutputResources withContainers(Container[] containers) {
        this.containers = containers;
        return this;
    }
}