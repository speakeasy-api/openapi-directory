package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbInstanceAutomatedBackupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbInstanceAutomatedBackupsActionEnum action;
    public PostDescribeDbInstanceAutomatedBackupsQueryParams withAction(PostDescribeDbInstanceAutomatedBackupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeDbInstanceAutomatedBackupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeDbInstanceAutomatedBackupsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbInstanceAutomatedBackupsVersionEnum version;
    public PostDescribeDbInstanceAutomatedBackupsQueryParams withVersion(PostDescribeDbInstanceAutomatedBackupsVersionEnum version) {
        this.version = version;
        return this;
    }
}