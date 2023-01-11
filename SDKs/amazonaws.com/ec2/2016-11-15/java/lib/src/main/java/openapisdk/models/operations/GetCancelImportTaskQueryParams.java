package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCancelImportTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCancelImportTaskActionEnum action;
    public GetCancelImportTaskQueryParams withAction(GetCancelImportTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CancelReason")
    public String cancelReason;
    public GetCancelImportTaskQueryParams withCancelReason(String cancelReason) {
        this.cancelReason = cancelReason;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCancelImportTaskQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ImportTaskId")
    public String importTaskId;
    public GetCancelImportTaskQueryParams withImportTaskId(String importTaskId) {
        this.importTaskId = importTaskId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCancelImportTaskVersionEnum version;
    public GetCancelImportTaskQueryParams withVersion(GetCancelImportTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}