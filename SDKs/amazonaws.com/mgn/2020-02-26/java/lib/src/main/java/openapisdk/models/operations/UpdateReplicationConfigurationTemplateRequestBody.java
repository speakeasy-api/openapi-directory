package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateReplicationConfigurationTemplateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public UpdateReplicationConfigurationTemplateRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associateDefaultSecurityGroup")
    public Boolean associateDefaultSecurityGroup;
    public UpdateReplicationConfigurationTemplateRequestBody withAssociateDefaultSecurityGroup(Boolean associateDefaultSecurityGroup) {
        this.associateDefaultSecurityGroup = associateDefaultSecurityGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidthThrottling")
    public Long bandwidthThrottling;
    public UpdateReplicationConfigurationTemplateRequestBody withBandwidthThrottling(Long bandwidthThrottling) {
        this.bandwidthThrottling = bandwidthThrottling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createPublicIP")
    public Boolean createPublicIP;
    public UpdateReplicationConfigurationTemplateRequestBody withCreatePublicIp(Boolean createPublicIP) {
        this.createPublicIP = createPublicIP;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataPlaneRouting")
    public UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum dataPlaneRouting;
    public UpdateReplicationConfigurationTemplateRequestBody withDataPlaneRouting(UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum dataPlaneRouting) {
        this.dataPlaneRouting = dataPlaneRouting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLargeStagingDiskType")
    public UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum defaultLargeStagingDiskType;
    public UpdateReplicationConfigurationTemplateRequestBody withDefaultLargeStagingDiskType(UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum defaultLargeStagingDiskType) {
        this.defaultLargeStagingDiskType = defaultLargeStagingDiskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ebsEncryption")
    public UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum ebsEncryption;
    public UpdateReplicationConfigurationTemplateRequestBody withEbsEncryption(UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum ebsEncryption) {
        this.ebsEncryption = ebsEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ebsEncryptionKeyArn")
    public String ebsEncryptionKeyArn;
    public UpdateReplicationConfigurationTemplateRequestBody withEbsEncryptionKeyArn(String ebsEncryptionKeyArn) {
        this.ebsEncryptionKeyArn = ebsEncryptionKeyArn;
        return this;
    }
    @JsonProperty("replicationConfigurationTemplateID")
    public String replicationConfigurationTemplateID;
    public UpdateReplicationConfigurationTemplateRequestBody withReplicationConfigurationTemplateId(String replicationConfigurationTemplateID) {
        this.replicationConfigurationTemplateID = replicationConfigurationTemplateID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationServerInstanceType")
    public String replicationServerInstanceType;
    public UpdateReplicationConfigurationTemplateRequestBody withReplicationServerInstanceType(String replicationServerInstanceType) {
        this.replicationServerInstanceType = replicationServerInstanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationServersSecurityGroupsIDs")
    public String[] replicationServersSecurityGroupsIDs;
    public UpdateReplicationConfigurationTemplateRequestBody withReplicationServersSecurityGroupsIDs(String[] replicationServersSecurityGroupsIDs) {
        this.replicationServersSecurityGroupsIDs = replicationServersSecurityGroupsIDs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stagingAreaSubnetId")
    public String stagingAreaSubnetId;
    public UpdateReplicationConfigurationTemplateRequestBody withStagingAreaSubnetId(String stagingAreaSubnetId) {
        this.stagingAreaSubnetId = stagingAreaSubnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stagingAreaTags")
    public java.util.Map<String, String> stagingAreaTags;
    public UpdateReplicationConfigurationTemplateRequestBody withStagingAreaTags(java.util.Map<String, String> stagingAreaTags) {
        this.stagingAreaTags = stagingAreaTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useDedicatedReplicationServer")
    public Boolean useDedicatedReplicationServer;
    public UpdateReplicationConfigurationTemplateRequestBody withUseDedicatedReplicationServer(Boolean useDedicatedReplicationServer) {
        this.useDedicatedReplicationServer = useDedicatedReplicationServer;
        return this;
    }
}