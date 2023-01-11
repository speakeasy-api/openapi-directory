package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPromoteReadReplicaDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPromoteReadReplicaDbClusterActionEnum action;
    public PostPromoteReadReplicaDbClusterQueryParams withAction(PostPromoteReadReplicaDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPromoteReadReplicaDbClusterVersionEnum version;
    public PostPromoteReadReplicaDbClusterQueryParams withVersion(PostPromoteReadReplicaDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}