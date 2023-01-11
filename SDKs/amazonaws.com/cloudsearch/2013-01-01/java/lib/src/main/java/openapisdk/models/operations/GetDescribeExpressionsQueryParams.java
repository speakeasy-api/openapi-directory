package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeExpressionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeExpressionsActionEnum action;
    public GetDescribeExpressionsQueryParams withAction(GetDescribeExpressionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Deployed")
    public Boolean deployed;
    public GetDescribeExpressionsQueryParams withDeployed(Boolean deployed) {
        this.deployed = deployed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeExpressionsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExpressionNames")
    public String[] expressionNames;
    public GetDescribeExpressionsQueryParams withExpressionNames(String[] expressionNames) {
        this.expressionNames = expressionNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeExpressionsVersionEnum version;
    public GetDescribeExpressionsQueryParams withVersion(GetDescribeExpressionsVersionEnum version) {
        this.version = version;
        return this;
    }
}