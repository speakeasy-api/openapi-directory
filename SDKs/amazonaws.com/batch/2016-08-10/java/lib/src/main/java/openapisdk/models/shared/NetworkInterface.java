package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkInterface
 * An object representing the elastic network interface for a multi-node parallel job node.
**/
public class NetworkInterface {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachmentId")
    public String attachmentId;
    public NetworkInterface withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6Address")
    public String ipv6Address;
    public NetworkInterface withIpv6Address(String ipv6Address) {
        this.ipv6Address = ipv6Address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateIpv4Address")
    public String privateIpv4Address;
    public NetworkInterface withPrivateIpv4Address(String privateIpv4Address) {
        this.privateIpv4Address = privateIpv4Address;
        return this;
    }
}