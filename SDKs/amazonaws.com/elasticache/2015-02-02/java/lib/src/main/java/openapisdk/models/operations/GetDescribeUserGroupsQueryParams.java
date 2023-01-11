package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeUserGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeUserGroupsActionEnum action;
    public GetDescribeUserGroupsQueryParams withAction(GetDescribeUserGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeUserGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeUserGroupsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserGroupId")
    public String userGroupId;
    public GetDescribeUserGroupsQueryParams withUserGroupId(String userGroupId) {
        this.userGroupId = userGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeUserGroupsVersionEnum version;
    public GetDescribeUserGroupsQueryParams withVersion(GetDescribeUserGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}