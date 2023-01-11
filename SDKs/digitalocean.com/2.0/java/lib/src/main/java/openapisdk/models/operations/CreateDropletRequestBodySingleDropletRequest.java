package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDropletRequestBodySingleDropletRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backups")
    public Boolean backups;
    public CreateDropletRequestBodySingleDropletRequest withBackups(Boolean backups) {
        this.backups = backups;
        return this;
    }
    @JsonProperty("image")
    public Object image;
    public CreateDropletRequestBodySingleDropletRequest withImage(Object image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6")
    public Boolean ipv6;
    public CreateDropletRequestBodySingleDropletRequest withIpv6(Boolean ipv6) {
        this.ipv6 = ipv6;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitoring")
    public Boolean monitoring;
    public CreateDropletRequestBodySingleDropletRequest withMonitoring(Boolean monitoring) {
        this.monitoring = monitoring;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateDropletRequestBodySingleDropletRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_networking")
    public Boolean privateNetworking;
    public CreateDropletRequestBodySingleDropletRequest withPrivateNetworking(Boolean privateNetworking) {
        this.privateNetworking = privateNetworking;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public CreateDropletRequestBodySingleDropletRequest withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("size")
    public String size;
    public CreateDropletRequestBodySingleDropletRequest withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssh_keys")
    public Object[] sshKeys;
    public CreateDropletRequestBodySingleDropletRequest withSshKeys(Object[] sshKeys) {
        this.sshKeys = sshKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public CreateDropletRequestBodySingleDropletRequest withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_data")
    public String userData;
    public CreateDropletRequestBodySingleDropletRequest withUserData(String userData) {
        this.userData = userData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc_uuid")
    public String vpcUuid;
    public CreateDropletRequestBodySingleDropletRequest withVpcUuid(String vpcUuid) {
        this.vpcUuid = vpcUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("with_droplet_agent")
    public Boolean withDropletAgent;
    public CreateDropletRequestBodySingleDropletRequest withWithDropletAgent(Boolean withDropletAgent) {
        this.withDropletAgent = withDropletAgent;
        return this;
    }
}