package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDefineRankExpressionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDefineRankExpressionActionEnum action;
    public GetDefineRankExpressionQueryParams withAction(GetDefineRankExpressionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDefineRankExpressionQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RankExpression")
    public GetDefineRankExpressionRankExpression rankExpression;
    public GetDefineRankExpressionQueryParams withRankExpression(GetDefineRankExpressionRankExpression rankExpression) {
        this.rankExpression = rankExpression;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDefineRankExpressionVersionEnum version;
    public GetDefineRankExpressionQueryParams withVersion(GetDefineRankExpressionVersionEnum version) {
        this.version = version;
        return this;
    }
}