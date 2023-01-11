package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateReplicationConfigurationTemplateRequestBody {
    @JsonProperty("associateDefaultSecurityGroup")
    public Boolean associateDefaultSecurityGroup;
    public CreateReplicationConfigurationTemplateRequestBody withAssociateDefaultSecurityGroup(Boolean associateDefaultSecurityGroup) {
        this.associateDefaultSecurityGroup = associateDefaultSecurityGroup;
        return this;
    }
    @JsonProperty("bandwidthThrottling")
    public Long bandwidthThrottling;
    public CreateReplicationConfigurationTemplateRequestBody withBandwidthThrottling(Long bandwidthThrottling) {
        this.bandwidthThrottling = bandwidthThrottling;
        return this;
    }
    @JsonProperty("createPublicIP")
    public Boolean createPublicIP;
    public CreateReplicationConfigurationTemplateRequestBody withCreatePublicIp(Boolean createPublicIP) {
        this.createPublicIP = createPublicIP;
        return this;
    }
    @JsonProperty("dataPlaneRouting")
    public CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum dataPlaneRouting;
    public CreateReplicationConfigurationTemplateRequestBody withDataPlaneRouting(CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum dataPlaneRouting) {
        this.dataPlaneRouting = dataPlaneRouting;
        return this;
    }
    @JsonProperty("defaultLargeStagingDiskType")
    public CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum defaultLargeStagingDiskType;
    public CreateReplicationConfigurationTemplateRequestBody withDefaultLargeStagingDiskType(CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum defaultLargeStagingDiskType) {
        this.defaultLargeStagingDiskType = defaultLargeStagingDiskType;
        return this;
    }
    @JsonProperty("ebsEncryption")
    public CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum ebsEncryption;
    public CreateReplicationConfigurationTemplateRequestBody withEbsEncryption(CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum ebsEncryption) {
        this.ebsEncryption = ebsEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ebsEncryptionKeyArn")
    public String ebsEncryptionKeyArn;
    public CreateReplicationConfigurationTemplateRequestBody withEbsEncryptionKeyArn(String ebsEncryptionKeyArn) {
        this.ebsEncryptionKeyArn = ebsEncryptionKeyArn;
        return this;
    }
    @JsonProperty("replicationServerInstanceType")
    public String replicationServerInstanceType;
    public CreateReplicationConfigurationTemplateRequestBody withReplicationServerInstanceType(String replicationServerInstanceType) {
        this.replicationServerInstanceType = replicationServerInstanceType;
        return this;
    }
    @JsonProperty("replicationServersSecurityGroupsIDs")
    public String[] replicationServersSecurityGroupsIDs;
    public CreateReplicationConfigurationTemplateRequestBody withReplicationServersSecurityGroupsIDs(String[] replicationServersSecurityGroupsIDs) {
        this.replicationServersSecurityGroupsIDs = replicationServersSecurityGroupsIDs;
        return this;
    }
    @JsonProperty("stagingAreaSubnetId")
    public String stagingAreaSubnetId;
    public CreateReplicationConfigurationTemplateRequestBody withStagingAreaSubnetId(String stagingAreaSubnetId) {
        this.stagingAreaSubnetId = stagingAreaSubnetId;
        return this;
    }
    @JsonProperty("stagingAreaTags")
    public java.util.Map<String, String> stagingAreaTags;
    public CreateReplicationConfigurationTemplateRequestBody withStagingAreaTags(java.util.Map<String, String> stagingAreaTags) {
        this.stagingAreaTags = stagingAreaTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateReplicationConfigurationTemplateRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("useDedicatedReplicationServer")
    public Boolean useDedicatedReplicationServer;
    public CreateReplicationConfigurationTemplateRequestBody withUseDedicatedReplicationServer(Boolean useDedicatedReplicationServer) {
        this.useDedicatedReplicationServer = useDedicatedReplicationServer;
        return this;
    }
}