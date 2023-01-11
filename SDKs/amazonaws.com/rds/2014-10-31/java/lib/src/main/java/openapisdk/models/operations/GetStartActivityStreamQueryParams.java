package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStartActivityStreamQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetStartActivityStreamActionEnum action;
    public GetStartActivityStreamQueryParams withAction(GetStartActivityStreamActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplyImmediately")
    public Boolean applyImmediately;
    public GetStartActivityStreamQueryParams withApplyImmediately(Boolean applyImmediately) {
        this.applyImmediately = applyImmediately;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EngineNativeAuditFieldsIncluded")
    public Boolean engineNativeAuditFieldsIncluded;
    public GetStartActivityStreamQueryParams withEngineNativeAuditFieldsIncluded(Boolean engineNativeAuditFieldsIncluded) {
        this.engineNativeAuditFieldsIncluded = engineNativeAuditFieldsIncluded;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=KmsKeyId")
    public String kmsKeyId;
    public GetStartActivityStreamQueryParams withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Mode")
    public GetStartActivityStreamModeEnum mode;
    public GetStartActivityStreamQueryParams withMode(GetStartActivityStreamModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ResourceArn")
    public String resourceArn;
    public GetStartActivityStreamQueryParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetStartActivityStreamVersionEnum version;
    public GetStartActivityStreamQueryParams withVersion(GetStartActivityStreamVersionEnum version) {
        this.version = version;
        return this;
    }
}