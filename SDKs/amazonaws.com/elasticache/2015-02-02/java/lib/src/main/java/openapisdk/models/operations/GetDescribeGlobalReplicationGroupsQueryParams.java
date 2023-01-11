package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeGlobalReplicationGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeGlobalReplicationGroupsActionEnum action;
    public GetDescribeGlobalReplicationGroupsQueryParams withAction(GetDescribeGlobalReplicationGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GlobalReplicationGroupId")
    public String globalReplicationGroupId;
    public GetDescribeGlobalReplicationGroupsQueryParams withGlobalReplicationGroupId(String globalReplicationGroupId) {
        this.globalReplicationGroupId = globalReplicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeGlobalReplicationGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeGlobalReplicationGroupsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ShowMemberInfo")
    public Boolean showMemberInfo;
    public GetDescribeGlobalReplicationGroupsQueryParams withShowMemberInfo(Boolean showMemberInfo) {
        this.showMemberInfo = showMemberInfo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeGlobalReplicationGroupsVersionEnum version;
    public GetDescribeGlobalReplicationGroupsQueryParams withVersion(GetDescribeGlobalReplicationGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}