package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResizeClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetResizeClusterActionEnum action;
    public GetResizeClusterQueryParams withAction(GetResizeClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Classic")
    public Boolean classic;
    public GetResizeClusterQueryParams withClassic(Boolean classic) {
        this.classic = classic;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetResizeClusterQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterType")
    public String clusterType;
    public GetResizeClusterQueryParams withClusterType(String clusterType) {
        this.clusterType = clusterType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NodeType")
    public String nodeType;
    public GetResizeClusterQueryParams withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NumberOfNodes")
    public Long numberOfNodes;
    public GetResizeClusterQueryParams withNumberOfNodes(Long numberOfNodes) {
        this.numberOfNodes = numberOfNodes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetResizeClusterVersionEnum version;
    public GetResizeClusterQueryParams withVersion(GetResizeClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}