package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpCity
 * Provides information about the city that an IP address originated from.
**/
public class IpCity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public IpCity withName(String name) {
        this.name = name;
        return this;
    }
}