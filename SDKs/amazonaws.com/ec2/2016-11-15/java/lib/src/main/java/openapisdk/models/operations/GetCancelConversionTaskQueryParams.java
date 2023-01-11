package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCancelConversionTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCancelConversionTaskActionEnum action;
    public GetCancelConversionTaskQueryParams withAction(GetCancelConversionTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConversionTaskId")
    public String conversionTaskId;
    public GetCancelConversionTaskQueryParams withConversionTaskId(String conversionTaskId) {
        this.conversionTaskId = conversionTaskId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCancelConversionTaskQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReasonMessage")
    public String reasonMessage;
    public GetCancelConversionTaskQueryParams withReasonMessage(String reasonMessage) {
        this.reasonMessage = reasonMessage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCancelConversionTaskVersionEnum version;
    public GetCancelConversionTaskQueryParams withVersion(GetCancelConversionTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}