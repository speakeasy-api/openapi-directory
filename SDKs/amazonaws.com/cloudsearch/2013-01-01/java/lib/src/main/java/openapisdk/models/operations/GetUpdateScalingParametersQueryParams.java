package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateScalingParametersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateScalingParametersActionEnum action;
    public GetUpdateScalingParametersQueryParams withAction(GetUpdateScalingParametersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetUpdateScalingParametersQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ScalingParameters")
    public GetUpdateScalingParametersScalingParameters scalingParameters;
    public GetUpdateScalingParametersQueryParams withScalingParameters(GetUpdateScalingParametersScalingParameters scalingParameters) {
        this.scalingParameters = scalingParameters;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateScalingParametersVersionEnum version;
    public GetUpdateScalingParametersQueryParams withVersion(GetUpdateScalingParametersVersionEnum version) {
        this.version = version;
        return this;
    }
}