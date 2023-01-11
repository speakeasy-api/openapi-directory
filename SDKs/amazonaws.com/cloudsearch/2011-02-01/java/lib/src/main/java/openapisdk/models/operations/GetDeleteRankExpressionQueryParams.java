package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteRankExpressionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteRankExpressionActionEnum action;
    public GetDeleteRankExpressionQueryParams withAction(GetDeleteRankExpressionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDeleteRankExpressionQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RankName")
    public String rankName;
    public GetDeleteRankExpressionQueryParams withRankName(String rankName) {
        this.rankName = rankName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteRankExpressionVersionEnum version;
    public GetDeleteRankExpressionQueryParams withVersion(GetDeleteRankExpressionVersionEnum version) {
        this.version = version;
        return this;
    }
}