package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDropletRequestBodyMultipleDropletRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backups")
    public Boolean backups;
    public CreateDropletRequestBodyMultipleDropletRequest withBackups(Boolean backups) {
        this.backups = backups;
        return this;
    }
    @JsonProperty("image")
    public Object image;
    public CreateDropletRequestBodyMultipleDropletRequest withImage(Object image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6")
    public Boolean ipv6;
    public CreateDropletRequestBodyMultipleDropletRequest withIpv6(Boolean ipv6) {
        this.ipv6 = ipv6;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitoring")
    public Boolean monitoring;
    public CreateDropletRequestBodyMultipleDropletRequest withMonitoring(Boolean monitoring) {
        this.monitoring = monitoring;
        return this;
    }
    @JsonProperty("names")
    public String[] names;
    public CreateDropletRequestBodyMultipleDropletRequest withNames(String[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_networking")
    public Boolean privateNetworking;
    public CreateDropletRequestBodyMultipleDropletRequest withPrivateNetworking(Boolean privateNetworking) {
        this.privateNetworking = privateNetworking;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public CreateDropletRequestBodyMultipleDropletRequest withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("size")
    public String size;
    public CreateDropletRequestBodyMultipleDropletRequest withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssh_keys")
    public Object[] sshKeys;
    public CreateDropletRequestBodyMultipleDropletRequest withSshKeys(Object[] sshKeys) {
        this.sshKeys = sshKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public CreateDropletRequestBodyMultipleDropletRequest withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_data")
    public String userData;
    public CreateDropletRequestBodyMultipleDropletRequest withUserData(String userData) {
        this.userData = userData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc_uuid")
    public String vpcUuid;
    public CreateDropletRequestBodyMultipleDropletRequest withVpcUuid(String vpcUuid) {
        this.vpcUuid = vpcUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("with_droplet_agent")
    public Boolean withDropletAgent;
    public CreateDropletRequestBodyMultipleDropletRequest withWithDropletAgent(Boolean withDropletAgent) {
        this.withDropletAgent = withDropletAgent;
        return this;
    }
}