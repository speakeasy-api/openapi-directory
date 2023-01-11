package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeStopwordOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeStopwordOptionsActionEnum action;
    public GetDescribeStopwordOptionsQueryParams withAction(GetDescribeStopwordOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeStopwordOptionsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeStopwordOptionsVersionEnum version;
    public GetDescribeStopwordOptionsQueryParams withVersion(GetDescribeStopwordOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}