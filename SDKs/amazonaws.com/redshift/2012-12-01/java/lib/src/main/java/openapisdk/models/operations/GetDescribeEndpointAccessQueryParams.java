package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeEndpointAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeEndpointAccessActionEnum action;
    public GetDescribeEndpointAccessQueryParams withAction(GetDescribeEndpointAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetDescribeEndpointAccessQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndpointName")
    public String endpointName;
    public GetDescribeEndpointAccessQueryParams withEndpointName(String endpointName) {
        this.endpointName = endpointName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeEndpointAccessQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeEndpointAccessQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceOwner")
    public String resourceOwner;
    public GetDescribeEndpointAccessQueryParams withResourceOwner(String resourceOwner) {
        this.resourceOwner = resourceOwner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeEndpointAccessVersionEnum version;
    public GetDescribeEndpointAccessQueryParams withVersion(GetDescribeEndpointAccessVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetDescribeEndpointAccessQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}