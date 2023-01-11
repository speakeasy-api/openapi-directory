package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails
 * A hostname and IP address mapping to append to the <b>/etc/hosts</b> file on the container.
**/
public class AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hostname")
    public String hostname;
    public AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddress")
    public String ipAddress;
    public AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
}