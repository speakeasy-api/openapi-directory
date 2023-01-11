package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDefineExpressionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDefineExpressionActionEnum action;
    public GetDefineExpressionQueryParams withAction(GetDefineExpressionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDefineExpressionQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Expression")
    public GetDefineExpressionExpression expression;
    public GetDefineExpressionQueryParams withExpression(GetDefineExpressionExpression expression) {
        this.expression = expression;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDefineExpressionVersionEnum version;
    public GetDefineExpressionQueryParams withVersion(GetDefineExpressionVersionEnum version) {
        this.version = version;
        return this;
    }
}