package openapisdk.models.shared;

import java.time.OffsetDateTime;

public class DbInstance {
    public Long allocatedStorage;
    public DbInstance withAllocatedStorage(Long allocatedStorage) {
        this.allocatedStorage = allocatedStorage;
        return this;
    }
    public Boolean autoMinorVersionUpgrade;
    public DbInstance withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    public String availabilityZone;
    public DbInstance withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public Long backupRetentionPeriod;
    public DbInstance withBackupRetentionPeriod(Long backupRetentionPeriod) {
        this.backupRetentionPeriod = backupRetentionPeriod;
        return this;
    }
    public String characterSetName;
    public DbInstance withCharacterSetName(String characterSetName) {
        this.characterSetName = characterSetName;
        return this;
    }
    public String dbInstanceClass;
    public DbInstance withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    public String dbInstanceIdentifier;
    public DbInstance withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    public String dbInstanceStatus;
    public DbInstance withDbInstanceStatus(String dbInstanceStatus) {
        this.dbInstanceStatus = dbInstanceStatus;
        return this;
    }
    public String dbName;
    public DbInstance withDbName(String dbName) {
        this.dbName = dbName;
        return this;
    }
    public DbParameterGroupStatusList[] dbParameterGroups;
    public DbInstance withDbParameterGroups(DbParameterGroupStatusList[] dbParameterGroups) {
        this.dbParameterGroups = dbParameterGroups;
        return this;
    }
    public DbSecurityGroupMembershipList[] dbSecurityGroups;
    public DbInstance withDbSecurityGroups(DbSecurityGroupMembershipList[] dbSecurityGroups) {
        this.dbSecurityGroups = dbSecurityGroups;
        return this;
    }
    public DbSubnetGroup dbSubnetGroup;
    public DbInstance withDbSubnetGroup(DbSubnetGroup dbSubnetGroup) {
        this.dbSubnetGroup = dbSubnetGroup;
        return this;
    }
    public Endpoint endpoint;
    public DbInstance withEndpoint(Endpoint endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    public String engine;
    public DbInstance withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public DbInstance withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public OffsetDateTime instanceCreateTime;
    public DbInstance withInstanceCreateTime(OffsetDateTime instanceCreateTime) {
        this.instanceCreateTime = instanceCreateTime;
        return this;
    }
    public Long iops;
    public DbInstance withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    public OffsetDateTime latestRestorableTime;
    public DbInstance withLatestRestorableTime(OffsetDateTime latestRestorableTime) {
        this.latestRestorableTime = latestRestorableTime;
        return this;
    }
    public String licenseModel;
    public DbInstance withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    public String masterUsername;
    public DbInstance withMasterUsername(String masterUsername) {
        this.masterUsername = masterUsername;
        return this;
    }
    public Boolean multiAZ;
    public DbInstance withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    public OptionGroupMembership optionGroupMembership;
    public DbInstance withOptionGroupMembership(OptionGroupMembership optionGroupMembership) {
        this.optionGroupMembership = optionGroupMembership;
        return this;
    }
    public PendingModifiedValues pendingModifiedValues;
    public DbInstance withPendingModifiedValues(PendingModifiedValues pendingModifiedValues) {
        this.pendingModifiedValues = pendingModifiedValues;
        return this;
    }
    public String preferredBackupWindow;
    public DbInstance withPreferredBackupWindow(String preferredBackupWindow) {
        this.preferredBackupWindow = preferredBackupWindow;
        return this;
    }
    public String preferredMaintenanceWindow;
    public DbInstance withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    public Boolean publiclyAccessible;
    public DbInstance withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
    public java.util.Map<String, Object>[] readReplicaDBInstanceIdentifiers;
    public DbInstance withReadReplicaDbInstanceIdentifiers(java.util.Map<String, Object>[] readReplicaDBInstanceIdentifiers) {
        this.readReplicaDBInstanceIdentifiers = readReplicaDBInstanceIdentifiers;
        return this;
    }
    public String readReplicaSourceDBInstanceIdentifier;
    public DbInstance withReadReplicaSourceDbInstanceIdentifier(String readReplicaSourceDBInstanceIdentifier) {
        this.readReplicaSourceDBInstanceIdentifier = readReplicaSourceDBInstanceIdentifier;
        return this;
    }
    public String secondaryAvailabilityZone;
    public DbInstance withSecondaryAvailabilityZone(String secondaryAvailabilityZone) {
        this.secondaryAvailabilityZone = secondaryAvailabilityZone;
        return this;
    }
    public VpcSecurityGroupMembershipList[] vpcSecurityGroups;
    public DbInstance withVpcSecurityGroups(VpcSecurityGroupMembershipList[] vpcSecurityGroups) {
        this.vpcSecurityGroups = vpcSecurityGroups;
        return this;
    }
}