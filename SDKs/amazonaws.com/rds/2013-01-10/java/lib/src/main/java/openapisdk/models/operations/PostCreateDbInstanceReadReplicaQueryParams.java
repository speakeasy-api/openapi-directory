package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbInstanceReadReplicaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDbInstanceReadReplicaActionEnum action;
    public PostCreateDbInstanceReadReplicaQueryParams withAction(PostCreateDbInstanceReadReplicaActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDbInstanceReadReplicaVersionEnum version;
    public PostCreateDbInstanceReadReplicaQueryParams withVersion(PostCreateDbInstanceReadReplicaVersionEnum version) {
        this.version = version;
        return this;
    }
}