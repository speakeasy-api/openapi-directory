package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublicIpAddressEntity
 * List all possible public IP addresses
**/
public class PublicIpAddressEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address")
    public String ipAddress;
    public PublicIpAddressEntity withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server_name")
    public String serverName;
    public PublicIpAddressEntity withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
}