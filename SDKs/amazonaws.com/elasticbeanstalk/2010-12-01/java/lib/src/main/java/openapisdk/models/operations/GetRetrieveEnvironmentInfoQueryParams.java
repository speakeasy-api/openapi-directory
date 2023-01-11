package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRetrieveEnvironmentInfoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRetrieveEnvironmentInfoActionEnum action;
    public GetRetrieveEnvironmentInfoQueryParams withAction(GetRetrieveEnvironmentInfoActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentId")
    public String environmentId;
    public GetRetrieveEnvironmentInfoQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentName")
    public String environmentName;
    public GetRetrieveEnvironmentInfoQueryParams withEnvironmentName(String environmentName) {
        this.environmentName = environmentName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InfoType")
    public GetRetrieveEnvironmentInfoInfoTypeEnum infoType;
    public GetRetrieveEnvironmentInfoQueryParams withInfoType(GetRetrieveEnvironmentInfoInfoTypeEnum infoType) {
        this.infoType = infoType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRetrieveEnvironmentInfoVersionEnum version;
    public GetRetrieveEnvironmentInfoQueryParams withVersion(GetRetrieveEnvironmentInfoVersionEnum version) {
        this.version = version;
        return this;
    }
}