package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetSessionTokenQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetSessionTokenActionEnum action;
    public GetGetSessionTokenQueryParams withAction(GetGetSessionTokenActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DurationSeconds")
    public Long durationSeconds;
    public GetGetSessionTokenQueryParams withDurationSeconds(Long durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SerialNumber")
    public String serialNumber;
    public GetGetSessionTokenQueryParams withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TokenCode")
    public String tokenCode;
    public GetGetSessionTokenQueryParams withTokenCode(String tokenCode) {
        this.tokenCode = tokenCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetSessionTokenVersionEnum version;
    public GetGetSessionTokenQueryParams withVersion(GetGetSessionTokenVersionEnum version) {
        this.version = version;
        return this;
    }
}