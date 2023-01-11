package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetRestoreDbInstanceToPointInTimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRestoreDbInstanceToPointInTimeActionEnum action;
    public GetRestoreDbInstanceToPointInTimeQueryParams withAction(GetRestoreDbInstanceToPointInTimeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoMinorVersionUpgrade")
    public Boolean autoMinorVersionUpgrade;
    public GetRestoreDbInstanceToPointInTimeQueryParams withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AvailabilityZone")
    public String availabilityZone;
    public GetRestoreDbInstanceToPointInTimeQueryParams withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceClass")
    public String dbInstanceClass;
    public GetRestoreDbInstanceToPointInTimeQueryParams withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBName")
    public String dbName;
    public GetRestoreDbInstanceToPointInTimeQueryParams withDbName(String dbName) {
        this.dbName = dbName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSubnetGroupName")
    public String dbSubnetGroupName;
    public GetRestoreDbInstanceToPointInTimeQueryParams withDbSubnetGroupName(String dbSubnetGroupName) {
        this.dbSubnetGroupName = dbSubnetGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Engine")
    public String engine;
    public GetRestoreDbInstanceToPointInTimeQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Iops")
    public Long iops;
    public GetRestoreDbInstanceToPointInTimeQueryParams withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LicenseModel")
    public String licenseModel;
    public GetRestoreDbInstanceToPointInTimeQueryParams withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MultiAZ")
    public Boolean multiAZ;
    public GetRestoreDbInstanceToPointInTimeQueryParams withMultiAz(Boolean multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OptionGroupName")
    public String optionGroupName;
    public GetRestoreDbInstanceToPointInTimeQueryParams withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Port")
    public Long port;
    public GetRestoreDbInstanceToPointInTimeQueryParams withPort(Long port) {
        this.port = port;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PubliclyAccessible")
    public Boolean publiclyAccessible;
    public GetRestoreDbInstanceToPointInTimeQueryParams withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RestoreTime")
    public OffsetDateTime restoreTime;
    public GetRestoreDbInstanceToPointInTimeQueryParams withRestoreTime(OffsetDateTime restoreTime) {
        this.restoreTime = restoreTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceDBInstanceIdentifier")
    public String sourceDBInstanceIdentifier;
    public GetRestoreDbInstanceToPointInTimeQueryParams withSourceDbInstanceIdentifier(String sourceDBInstanceIdentifier) {
        this.sourceDBInstanceIdentifier = sourceDBInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetDBInstanceIdentifier")
    public String targetDBInstanceIdentifier;
    public GetRestoreDbInstanceToPointInTimeQueryParams withTargetDbInstanceIdentifier(String targetDBInstanceIdentifier) {
        this.targetDBInstanceIdentifier = targetDBInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UseLatestRestorableTime")
    public Boolean useLatestRestorableTime;
    public GetRestoreDbInstanceToPointInTimeQueryParams withUseLatestRestorableTime(Boolean useLatestRestorableTime) {
        this.useLatestRestorableTime = useLatestRestorableTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRestoreDbInstanceToPointInTimeVersionEnum version;
    public GetRestoreDbInstanceToPointInTimeQueryParams withVersion(GetRestoreDbInstanceToPointInTimeVersionEnum version) {
        this.version = version;
        return this;
    }
}