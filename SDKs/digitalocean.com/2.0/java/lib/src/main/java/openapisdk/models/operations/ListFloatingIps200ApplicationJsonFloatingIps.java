package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFloatingIps200ApplicationJsonFloatingIps {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet")
    public Object droplet;
    public ListFloatingIps200ApplicationJsonFloatingIps withDroplet(Object droplet) {
        this.droplet = droplet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public ListFloatingIps200ApplicationJsonFloatingIps withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public ListFloatingIps200ApplicationJsonFloatingIps withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public ListFloatingIps200ApplicationJsonFloatingIpsRegion region;
    public ListFloatingIps200ApplicationJsonFloatingIps withRegion(ListFloatingIps200ApplicationJsonFloatingIpsRegion region) {
        this.region = region;
        return this;
    }
}