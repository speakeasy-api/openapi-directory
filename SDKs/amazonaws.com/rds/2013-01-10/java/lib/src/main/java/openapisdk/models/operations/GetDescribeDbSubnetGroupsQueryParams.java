package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDbSubnetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDbSubnetGroupsActionEnum action;
    public GetDescribeDbSubnetGroupsQueryParams withAction(GetDescribeDbSubnetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSubnetGroupName")
    public String dbSubnetGroupName;
    public GetDescribeDbSubnetGroupsQueryParams withDbSubnetGroupName(String dbSubnetGroupName) {
        this.dbSubnetGroupName = dbSubnetGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeDbSubnetGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeDbSubnetGroupsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDbSubnetGroupsVersionEnum version;
    public GetDescribeDbSubnetGroupsQueryParams withVersion(GetDescribeDbSubnetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}