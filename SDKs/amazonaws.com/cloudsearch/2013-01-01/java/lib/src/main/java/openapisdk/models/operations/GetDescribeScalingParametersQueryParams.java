package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeScalingParametersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeScalingParametersActionEnum action;
    public GetDescribeScalingParametersQueryParams withAction(GetDescribeScalingParametersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeScalingParametersQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeScalingParametersVersionEnum version;
    public GetDescribeScalingParametersQueryParams withVersion(GetDescribeScalingParametersVersionEnum version) {
        this.version = version;
        return this;
    }
}