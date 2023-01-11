package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDownloadDbLogFilePortionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDownloadDbLogFilePortionActionEnum action;
    public GetDownloadDbLogFilePortionQueryParams withAction(GetDownloadDbLogFilePortionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetDownloadDbLogFilePortionQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LogFileName")
    public String logFileName;
    public GetDownloadDbLogFilePortionQueryParams withLogFileName(String logFileName) {
        this.logFileName = logFileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDownloadDbLogFilePortionQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NumberOfLines")
    public Long numberOfLines;
    public GetDownloadDbLogFilePortionQueryParams withNumberOfLines(Long numberOfLines) {
        this.numberOfLines = numberOfLines;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDownloadDbLogFilePortionVersionEnum version;
    public GetDownloadDbLogFilePortionQueryParams withVersion(GetDownloadDbLogFilePortionVersionEnum version) {
        this.version = version;
        return this;
    }
}