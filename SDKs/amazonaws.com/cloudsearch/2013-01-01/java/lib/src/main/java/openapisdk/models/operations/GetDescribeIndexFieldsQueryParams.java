package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeIndexFieldsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeIndexFieldsActionEnum action;
    public GetDescribeIndexFieldsQueryParams withAction(GetDescribeIndexFieldsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Deployed")
    public Boolean deployed;
    public GetDescribeIndexFieldsQueryParams withDeployed(Boolean deployed) {
        this.deployed = deployed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeIndexFieldsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FieldNames")
    public String[] fieldNames;
    public GetDescribeIndexFieldsQueryParams withFieldNames(String[] fieldNames) {
        this.fieldNames = fieldNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeIndexFieldsVersionEnum version;
    public GetDescribeIndexFieldsQueryParams withVersion(GetDescribeIndexFieldsVersionEnum version) {
        this.version = version;
        return this;
    }
}