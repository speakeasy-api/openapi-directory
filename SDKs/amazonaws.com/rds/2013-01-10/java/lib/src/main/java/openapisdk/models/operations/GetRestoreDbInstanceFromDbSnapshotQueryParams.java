package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRestoreDbInstanceFromDbSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRestoreDbInstanceFromDbSnapshotActionEnum action;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withAction(GetRestoreDbInstanceFromDbSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoMinorVersionUpgrade")
    public Boolean autoMinorVersionUpgrade;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AvailabilityZone")
    public String availabilityZone;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceClass")
    public String dbInstanceClass;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBName")
    public String dbName;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withDbName(String dbName) {
        this.dbName = dbName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSnapshotIdentifier")
    public String dbSnapshotIdentifier;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withDbSnapshotIdentifier(String dbSnapshotIdentifier) {
        this.dbSnapshotIdentifier = dbSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSubnetGroupName")
    public String dbSubnetGroupName;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withDbSubnetGroupName(String dbSubnetGroupName) {
        this.dbSubnetGroupName = dbSubnetGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Engine")
    public String engine;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Iops")
    public Long iops;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LicenseModel")
    public String licenseModel;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MultiAZ")
    public Boolean multiAZ;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OptionGroupName")
    public String optionGroupName;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Port")
    public Long port;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withPort(Long port) {
        this.port = port;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PubliclyAccessible")
    public Boolean publiclyAccessible;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRestoreDbInstanceFromDbSnapshotVersionEnum version;
    public GetRestoreDbInstanceFromDbSnapshotQueryParams withVersion(GetRestoreDbInstanceFromDbSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}