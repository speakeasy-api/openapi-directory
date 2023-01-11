package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateReplicationConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associateDefaultSecurityGroup")
    public Boolean associateDefaultSecurityGroup;
    public UpdateReplicationConfigurationRequestBody withAssociateDefaultSecurityGroup(Boolean associateDefaultSecurityGroup) {
        this.associateDefaultSecurityGroup = associateDefaultSecurityGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandwidthThrottling")
    public Long bandwidthThrottling;
    public UpdateReplicationConfigurationRequestBody withBandwidthThrottling(Long bandwidthThrottling) {
        this.bandwidthThrottling = bandwidthThrottling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createPublicIP")
    public Boolean createPublicIP;
    public UpdateReplicationConfigurationRequestBody withCreatePublicIp(Boolean createPublicIP) {
        this.createPublicIP = createPublicIP;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataPlaneRouting")
    public UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum dataPlaneRouting;
    public UpdateReplicationConfigurationRequestBody withDataPlaneRouting(UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum dataPlaneRouting) {
        this.dataPlaneRouting = dataPlaneRouting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLargeStagingDiskType")
    public UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum defaultLargeStagingDiskType;
    public UpdateReplicationConfigurationRequestBody withDefaultLargeStagingDiskType(UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum defaultLargeStagingDiskType) {
        this.defaultLargeStagingDiskType = defaultLargeStagingDiskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ebsEncryption")
    public UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum ebsEncryption;
    public UpdateReplicationConfigurationRequestBody withEbsEncryption(UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum ebsEncryption) {
        this.ebsEncryption = ebsEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ebsEncryptionKeyArn")
    public String ebsEncryptionKeyArn;
    public UpdateReplicationConfigurationRequestBody withEbsEncryptionKeyArn(String ebsEncryptionKeyArn) {
        this.ebsEncryptionKeyArn = ebsEncryptionKeyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateReplicationConfigurationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicatedDisks")
    public openapisdk.models.shared.ReplicationConfigurationReplicatedDisk[] replicatedDisks;
    public UpdateReplicationConfigurationRequestBody withReplicatedDisks(openapisdk.models.shared.ReplicationConfigurationReplicatedDisk[] replicatedDisks) {
        this.replicatedDisks = replicatedDisks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationServerInstanceType")
    public String replicationServerInstanceType;
    public UpdateReplicationConfigurationRequestBody withReplicationServerInstanceType(String replicationServerInstanceType) {
        this.replicationServerInstanceType = replicationServerInstanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationServersSecurityGroupsIDs")
    public String[] replicationServersSecurityGroupsIDs;
    public UpdateReplicationConfigurationRequestBody withReplicationServersSecurityGroupsIDs(String[] replicationServersSecurityGroupsIDs) {
        this.replicationServersSecurityGroupsIDs = replicationServersSecurityGroupsIDs;
        return this;
    }
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public UpdateReplicationConfigurationRequestBody withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stagingAreaSubnetId")
    public String stagingAreaSubnetId;
    public UpdateReplicationConfigurationRequestBody withStagingAreaSubnetId(String stagingAreaSubnetId) {
        this.stagingAreaSubnetId = stagingAreaSubnetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stagingAreaTags")
    public java.util.Map<String, String> stagingAreaTags;
    public UpdateReplicationConfigurationRequestBody withStagingAreaTags(java.util.Map<String, String> stagingAreaTags) {
        this.stagingAreaTags = stagingAreaTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useDedicatedReplicationServer")
    public Boolean useDedicatedReplicationServer;
    public UpdateReplicationConfigurationRequestBody withUseDedicatedReplicationServer(Boolean useDedicatedReplicationServer) {
        this.useDedicatedReplicationServer = useDedicatedReplicationServer;
        return this;
    }
}