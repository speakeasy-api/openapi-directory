package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeEndpointAuthorizationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Account")
    public String account;
    public GetDescribeEndpointAuthorizationQueryParams withAccount(String account) {
        this.account = account;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeEndpointAuthorizationActionEnum action;
    public GetDescribeEndpointAuthorizationQueryParams withAction(GetDescribeEndpointAuthorizationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetDescribeEndpointAuthorizationQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Grantee")
    public Boolean grantee;
    public GetDescribeEndpointAuthorizationQueryParams withGrantee(Boolean grantee) {
        this.grantee = grantee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeEndpointAuthorizationQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeEndpointAuthorizationQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeEndpointAuthorizationVersionEnum version;
    public GetDescribeEndpointAuthorizationQueryParams withVersion(GetDescribeEndpointAuthorizationVersionEnum version) {
        this.version = version;
        return this;
    }
}