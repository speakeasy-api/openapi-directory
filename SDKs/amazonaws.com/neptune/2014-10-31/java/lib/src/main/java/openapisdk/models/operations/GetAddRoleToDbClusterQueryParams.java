package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddRoleToDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAddRoleToDbClusterActionEnum action;
    public GetAddRoleToDbClusterQueryParams withAction(GetAddRoleToDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterIdentifier")
    public String dbClusterIdentifier;
    public GetAddRoleToDbClusterQueryParams withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FeatureName")
    public String featureName;
    public GetAddRoleToDbClusterQueryParams withFeatureName(String featureName) {
        this.featureName = featureName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RoleArn")
    public String roleArn;
    public GetAddRoleToDbClusterQueryParams withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAddRoleToDbClusterVersionEnum version;
    public GetAddRoleToDbClusterQueryParams withVersion(GetAddRoleToDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}