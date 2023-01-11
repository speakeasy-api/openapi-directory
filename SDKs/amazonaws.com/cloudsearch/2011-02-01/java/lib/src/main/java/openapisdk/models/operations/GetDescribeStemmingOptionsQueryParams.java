package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeStemmingOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeStemmingOptionsActionEnum action;
    public GetDescribeStemmingOptionsQueryParams withAction(GetDescribeStemmingOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeStemmingOptionsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeStemmingOptionsVersionEnum version;
    public GetDescribeStemmingOptionsQueryParams withVersion(GetDescribeStemmingOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}