package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class DbInstanceList {
    public Long allocatedStorage;
    public DbInstanceList withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    public Boolean autoMinorVersionUpgrade;
    public DbInstanceList withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    public String availabilityZone;
    public DbInstanceList withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public Long backupRetentionPeriod;
    public DbInstanceList withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    public String characterSetName;
    public DbInstanceList withCharacterSetName(String characterSetName) {
        this.characterSetName = characterSetName;
        return this;
    }
    public String dbInstanceClass;
    public DbInstanceList withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    public String dbInstanceIdentifier;
    public DbInstanceList withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    public String dbInstanceStatus;
    public DbInstanceList withDbInstanceStatus(String dbInstanceStatus) {
        this.dbInstanceStatus = dbInstanceStatus;
        return this;
    }
    public String dbName;
    public DbInstanceList withDbName(String dbName) {
        this.dbName = dbName;
        return this;
    }
    public DbParameterGroupStatusList[] dbParameterGroups;
    public DbInstanceList withDbParameterGroups(DbParameterGroupStatusList[] dbParameterGroups) {
        this.dbParameterGroups = dbParameterGroups;
        return this;
    }
    public DbSecurityGroupMembershipList[] dbSecurityGroups;
    public DbInstanceList withDbSecurityGroups(DbSecurityGroupMembershipList[] dbSecurityGroups) {
        this.dbSecurityGroups = dbSecurityGroups;
        return this;
    }
    public DbSubnetGroup dbSubnetGroup;
    public DbInstanceList withDbSubnetGroup(DbSubnetGroup dbSubnetGroup) {
        this.dbSubnetGroup = dbSubnetGroup;
        return this;
    }
    public Endpoint endpoint;
    public DbInstanceList withEndpoint(Endpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public String engine;
    public DbInstanceList withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public DbInstanceList withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public OffsetDateTime instanceCreateTime;
    public DbInstanceList withInstanceCreateTime(OffsetDateTime instanceCreateTime) {
        this.instanceCreateTime = instanceCreateTime;
        return this;
    }
    public Long iops;
    public DbInstanceList withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    public OffsetDateTime latestRestorableTime;
    public DbInstanceList withLatestRestorableTime(OffsetDateTime latestRestorableTime) {
        this.latestRestorableTime = latestRestorableTime;
        return this;
    }
    public String licenseModel;
    public DbInstanceList withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    public String masterUsername;
    public DbInstanceList withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    public Boolean multiAZ;
    public DbInstanceList withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    public OptionGroupMembershipList[] optionGroupMemberships;
    public DbInstanceList withOptionGroupMemberships(OptionGroupMembershipList[] optionGroupMemberships) {
        this.optionGroupMemberships = optionGroupMemberships;
        return this;
    }
    public PendingModifiedValues pendingModifiedValues;
    public DbInstanceList withPendingModifiedValues(PendingModifiedValues pendingModifiedValues) {
        this.pendingModifiedValues = pendingModifiedValues;
        return this;
    }
    public String preferredBackupWindow;
    public DbInstanceList withPreferredBackupWindow(String preferredBackupWindow) {
        this.preferredBackupWindow = preferredBackupWindow;
        return this;
    }
    public String preferredMaintenanceWindow;
    public DbInstanceList withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    public Boolean publiclyAccessible;
    public DbInstanceList withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
    public java.util.Map<String, Object>[] readReplicaDBInstanceIdentifiers;
    public DbInstanceList withReadReplicaDbInstanceIdentifiers(java.util.Map<String, Object>[] readReplicaDBInstanceIdentifiers) {
        this.readReplicaDBInstanceIdentifiers = readReplicaDBInstanceIdentifiers;
        return this;
    }
    public String readReplicaSourceDBInstanceIdentifier;
    public DbInstanceList withReadReplicaSourceDbInstanceIdentifier(String readReplicaSourceDBInstanceIdentifier) {
        this.readReplicaSourceDBInstanceIdentifier = readReplicaSourceDBInstanceIdentifier;
        return this;
    }
    public String secondaryAvailabilityZone;
    public DbInstanceList withSecondaryAvailabilityZone(String secondaryAvailabilityZone) {
        this.secondaryAvailabilityZone = secondaryAvailabilityZone;
        return this;
    }
    public DbInstanceStatusInfoList[] statusInfos;
    public DbInstanceList withStatusInfos(DbInstanceStatusInfoList[] statusInfos) {
        this.statusInfos = statusInfos;
        return this;
    }
    public VpcSecurityGroupMembershipList[] vpcSecurityGroups;
    public DbInstanceList withVpcSecurityGroups(VpcSecurityGroupMembershipList[] vpcSecurityGroups) {
        this.vpcSecurityGroups = vpcSecurityGroups;
        return this;
    }
}