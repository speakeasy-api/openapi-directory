package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Nameserver
 * Nameserver includes the following elements.
**/
public class Nameserver {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GlueIps")
    public String[] glueIps;
    public Nameserver withGlueIps(String[] glueIps) {
        this.glueIps = glueIps;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Nameserver withName(String name) {
        this.name = name;
        return this;
    }
}