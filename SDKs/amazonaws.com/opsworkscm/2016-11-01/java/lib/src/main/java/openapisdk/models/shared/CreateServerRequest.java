package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateServerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociatePublicIpAddress")
    public Boolean associatePublicIpAddress;
    public CreateServerRequest withAssociatePublicIpAddress(Boolean associatePublicIpAddress) {
        this.associatePublicIpAddress = associatePublicIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackupId")
    public String backupId;
    public CreateServerRequest withBackupId(String backupId) {
        this.backupId = backupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BackupRetentionCount")
    public Long backupRetentionCount;
    public CreateServerRequest withBackupRetentionCount(Long backupRetentionCount) {
        this.backupRetentionCount = backupRetentionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomCertificate")
    public String customCertificate;
    public CreateServerRequest withCustomCertificate(String customCertificate) {
        this.customCertificate = customCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomDomain")
    public String customDomain;
    public CreateServerRequest withCustomDomain(String customDomain) {
        this.customDomain = customDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomPrivateKey")
    public String customPrivateKey;
    public CreateServerRequest withCustomPrivateKey(String customPrivateKey) {
        this.customPrivateKey = customPrivateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableAutomatedBackup")
    public Boolean disableAutomatedBackup;
    public CreateServerRequest withDisableAutomatedBackup(Boolean disableAutomatedBackup) {
        this.disableAutomatedBackup = disableAutomatedBackup;
        return this;
    }
    @JsonProperty("Engine")
    public String engine;
    public CreateServerRequest withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineAttributes")
    public EngineAttribute[] engineAttributes;
    public CreateServerRequest withEngineAttributes(EngineAttribute[] engineAttributes) {
        this.engineAttributes = engineAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineModel")
    public String engineModel;
    public CreateServerRequest withEngineModel(String engineModel) {
        this.engineModel = engineModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineVersion")
    public String engineVersion;
    public CreateServerRequest withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonProperty("InstanceProfileArn")
    public String instanceProfileArn;
    public CreateServerRequest withInstanceProfileArn(String instanceProfileArn) {
        this.instanceProfileArn = instanceProfileArn;
        return this;
    }
    @JsonProperty("InstanceType")
    public String instanceType;
    public CreateServerRequest withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyPair")
    public String keyPair;
    public CreateServerRequest withKeyPair(String keyPair) {
        this.keyPair = keyPair;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredBackupWindow")
    public String preferredBackupWindow;
    public CreateServerRequest withPreferredBackupWindow(String preferredBackupWindow) {
        this.preferredBackupWindow = preferredBackupWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredMaintenanceWindow")
    public String preferredMaintenanceWindow;
    public CreateServerRequest withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public CreateServerRequest withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonProperty("ServerName")
    public String serverName;
    public CreateServerRequest withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    @JsonProperty("ServiceRoleArn")
    public String serviceRoleArn;
    public CreateServerRequest withServiceRoleArn(String serviceRoleArn) {
        this.serviceRoleArn = serviceRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public CreateServerRequest withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateServerRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}