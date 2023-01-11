package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetAttributes
 * A collection of attributes of the host from which the finding is generated.
**/
public class AssetAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentId")
    public String agentId;
    public AssetAttributes withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amiId")
    public String amiId;
    public AssetAttributes withAmiId(String amiId) {
        this.amiId = amiId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoScalingGroup")
    public String autoScalingGroup;
    public AssetAttributes withAutoScalingGroup(String autoScalingGroup) {
        this.autoScalingGroup = autoScalingGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public AssetAttributes withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv4Addresses")
    public String[] ipv4Addresses;
    public AssetAttributes withIpv4Addresses(String[] ipv4Addresses) {
        this.ipv4Addresses = ipv4Addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkInterfaces")
    public NetworkInterface[] networkInterfaces;
    public AssetAttributes withNetworkInterfaces(NetworkInterface[] networkInterfaces) {
        this.networkInterfaces = networkInterfaces;
        return this;
    }
    @JsonProperty("schemaVersion")
    public Long schemaVersion;
    public AssetAttributes withSchemaVersion(Long schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public AssetAttributes withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}