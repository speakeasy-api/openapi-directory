package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateDbInstanceReadReplicaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateDbInstanceReadReplicaActionEnum action;
    public GetCreateDbInstanceReadReplicaQueryParams withAction(GetCreateDbInstanceReadReplicaActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoMinorVersionUpgrade")
    public Boolean autoMinorVersionUpgrade;
    public GetCreateDbInstanceReadReplicaQueryParams withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AvailabilityZone")
    public String availabilityZone;
    public GetCreateDbInstanceReadReplicaQueryParams withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceClass")
    public String dbInstanceClass;
    public GetCreateDbInstanceReadReplicaQueryParams withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetCreateDbInstanceReadReplicaQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Iops")
    public Long iops;
    public GetCreateDbInstanceReadReplicaQueryParams withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OptionGroupName")
    public String optionGroupName;
    public GetCreateDbInstanceReadReplicaQueryParams withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Port")
    public Long port;
    public GetCreateDbInstanceReadReplicaQueryParams withPort(Long port) {
        this.port = port;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PubliclyAccessible")
    public Boolean publiclyAccessible;
    public GetCreateDbInstanceReadReplicaQueryParams withPubliclyAccessible(Boolean publiclyAccessible) {
        this.publiclyAccessible = publiclyAccessible;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceDBInstanceIdentifier")
    public String sourceDBInstanceIdentifier;
    public GetCreateDbInstanceReadReplicaQueryParams withSourceDbInstanceIdentifier(String sourceDBInstanceIdentifier) {
        this.sourceDBInstanceIdentifier = sourceDBInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateDbInstanceReadReplicaVersionEnum version;
    public GetCreateDbInstanceReadReplicaQueryParams withVersion(GetCreateDbInstanceReadReplicaVersionEnum version) {
        this.version = version;
        return this;
    }
}