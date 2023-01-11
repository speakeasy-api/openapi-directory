package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddRoleToDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAddRoleToDbInstanceActionEnum action;
    public GetAddRoleToDbInstanceQueryParams withAction(GetAddRoleToDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetAddRoleToDbInstanceQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FeatureName")
    public String featureName;
    public GetAddRoleToDbInstanceQueryParams withFeatureName(String featureName) {
        this.featureName = featureName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleArn")
    public String roleArn;
    public GetAddRoleToDbInstanceQueryParams withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAddRoleToDbInstanceVersionEnum version;
    public GetAddRoleToDbInstanceQueryParams withVersion(GetAddRoleToDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}