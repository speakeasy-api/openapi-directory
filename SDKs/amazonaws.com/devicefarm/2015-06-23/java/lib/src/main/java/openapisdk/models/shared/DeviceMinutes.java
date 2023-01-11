package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceMinutes
 * Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.
**/
public class DeviceMinutes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metered")
    public Double metered;
    public DeviceMinutes withMetered(Double metered) {
        this.metered = metered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public DeviceMinutes withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unmetered")
    public Double unmetered;
    public DeviceMinutes withUnmetered(Double unmetered) {
        this.unmetered = unmetered;
        return this;
    }
}