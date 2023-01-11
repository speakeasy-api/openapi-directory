package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRequestEnvironmentInfoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRequestEnvironmentInfoActionEnum action;
    public GetRequestEnvironmentInfoQueryParams withAction(GetRequestEnvironmentInfoActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentId")
    public String environmentId;
    public GetRequestEnvironmentInfoQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetRequestEnvironmentInfoQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InfoType")
    public GetRequestEnvironmentInfoInfoTypeEnum infoType;
    public GetRequestEnvironmentInfoQueryParams withInfoType(GetRequestEnvironmentInfoInfoTypeEnum infoType) {
        this.infoType = infoType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRequestEnvironmentInfoVersionEnum version;
    public GetRequestEnvironmentInfoQueryParams withVersion(GetRequestEnvironmentInfoVersionEnum version) {
        this.version = version;
        return this;
    }
}