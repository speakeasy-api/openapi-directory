package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoveRoleFromDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRemoveRoleFromDbClusterActionEnum action;
    public GetRemoveRoleFromDbClusterQueryParams withAction(GetRemoveRoleFromDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterIdentifier")
    public String dbClusterIdentifier;
    public GetRemoveRoleFromDbClusterQueryParams withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FeatureName")
    public String featureName;
    public GetRemoveRoleFromDbClusterQueryParams withFeatureName(String featureName) {
        this.featureName = featureName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleArn")
    public String roleArn;
    public GetRemoveRoleFromDbClusterQueryParams withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRemoveRoleFromDbClusterVersionEnum version;
    public GetRemoveRoleFromDbClusterQueryParams withVersion(GetRemoveRoleFromDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}