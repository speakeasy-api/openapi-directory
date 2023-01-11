package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoveRoleFromDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRemoveRoleFromDbInstanceActionEnum action;
    public GetRemoveRoleFromDbInstanceQueryParams withAction(GetRemoveRoleFromDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetRemoveRoleFromDbInstanceQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FeatureName")
    public String featureName;
    public GetRemoveRoleFromDbInstanceQueryParams withFeatureName(String featureName) {
        this.featureName = featureName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleArn")
    public String roleArn;
    public GetRemoveRoleFromDbInstanceQueryParams withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRemoveRoleFromDbInstanceVersionEnum version;
    public GetRemoveRoleFromDbInstanceQueryParams withVersion(GetRemoveRoleFromDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}