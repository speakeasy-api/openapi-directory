package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCancelExportTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCancelExportTaskActionEnum action;
    public GetCancelExportTaskQueryParams withAction(GetCancelExportTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExportTaskIdentifier")
    public String exportTaskIdentifier;
    public GetCancelExportTaskQueryParams withExportTaskIdentifier(String exportTaskIdentifier) {
        this.exportTaskIdentifier = exportTaskIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCancelExportTaskVersionEnum version;
    public GetCancelExportTaskQueryParams withVersion(GetCancelExportTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}