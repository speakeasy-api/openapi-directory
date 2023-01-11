package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTestFailoverQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetTestFailoverActionEnum action;
    public GetTestFailoverQueryParams withAction(GetTestFailoverActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NodeGroupId")
    public String nodeGroupId;
    public GetTestFailoverQueryParams withNodeGroupId(String nodeGroupId) {
        this.nodeGroupId = nodeGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReplicationGroupId")
    public String replicationGroupId;
    public GetTestFailoverQueryParams withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetTestFailoverVersionEnum version;
    public GetTestFailoverQueryParams withVersion(GetTestFailoverVersionEnum version) {
        this.version = version;
        return this;
    }
}