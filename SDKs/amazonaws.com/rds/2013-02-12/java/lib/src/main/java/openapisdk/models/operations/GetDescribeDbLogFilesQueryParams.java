package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDbLogFilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDbLogFilesActionEnum action;
    public GetDescribeDbLogFilesQueryParams withAction(GetDescribeDbLogFilesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetDescribeDbLogFilesQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FileLastWritten")
    public Long fileLastWritten;
    public GetDescribeDbLogFilesQueryParams withFileLastWritten(Long fileLastWritten) {
        this.fileLastWritten = fileLastWritten;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FileSize")
    public Long fileSize;
    public GetDescribeDbLogFilesQueryParams withFileSize(Long fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FilenameContains")
    public String filenameContains;
    public GetDescribeDbLogFilesQueryParams withFilenameContains(String filenameContains) {
        this.filenameContains = filenameContains;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeDbLogFilesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeDbLogFilesQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDbLogFilesVersionEnum version;
    public GetDescribeDbLogFilesQueryParams withVersion(GetDescribeDbLogFilesVersionEnum version) {
        this.version = version;
        return this;
    }
}