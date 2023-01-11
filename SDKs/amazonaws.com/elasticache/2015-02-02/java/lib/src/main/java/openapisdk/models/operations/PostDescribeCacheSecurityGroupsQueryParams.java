package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCacheSecurityGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeCacheSecurityGroupsActionEnum action;
    public PostDescribeCacheSecurityGroupsQueryParams withAction(PostDescribeCacheSecurityGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeCacheSecurityGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeCacheSecurityGroupsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeCacheSecurityGroupsVersionEnum version;
    public PostDescribeCacheSecurityGroupsQueryParams withVersion(PostDescribeCacheSecurityGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}