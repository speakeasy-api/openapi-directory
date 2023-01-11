package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteExpressionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteExpressionActionEnum action;
    public GetDeleteExpressionQueryParams withAction(GetDeleteExpressionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDeleteExpressionQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExpressionName")
    public String expressionName;
    public GetDeleteExpressionQueryParams withExpressionName(String expressionName) {
        this.expressionName = expressionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteExpressionVersionEnum version;
    public GetDeleteExpressionQueryParams withVersion(GetDeleteExpressionVersionEnum version) {
        this.version = version;
        return this;
    }
}