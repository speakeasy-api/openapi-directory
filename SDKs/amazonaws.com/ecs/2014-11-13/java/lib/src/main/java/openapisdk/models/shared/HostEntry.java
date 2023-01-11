package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * HostEntry
 * Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>. 
**/
public class HostEntry {
    @JsonProperty("hostname")
    public String hostname;
    public HostEntry withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonProperty("ipAddress")
    public String ipAddress;
    public HostEntry withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
}