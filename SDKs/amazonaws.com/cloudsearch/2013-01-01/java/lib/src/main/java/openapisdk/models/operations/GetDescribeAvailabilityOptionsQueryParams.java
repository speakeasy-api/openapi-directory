package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeAvailabilityOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeAvailabilityOptionsActionEnum action;
    public GetDescribeAvailabilityOptionsQueryParams withAction(GetDescribeAvailabilityOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Deployed")
    public Boolean deployed;
    public GetDescribeAvailabilityOptionsQueryParams withDeployed(Boolean deployed) {
        this.deployed = deployed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeAvailabilityOptionsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeAvailabilityOptionsVersionEnum version;
    public GetDescribeAvailabilityOptionsQueryParams withVersion(GetDescribeAvailabilityOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}