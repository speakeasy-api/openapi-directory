package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeRankExpressionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeRankExpressionsActionEnum action;
    public GetDescribeRankExpressionsQueryParams withAction(GetDescribeRankExpressionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeRankExpressionsQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RankNames")
    public String[] rankNames;
    public GetDescribeRankExpressionsQueryParams withRankNames(String[] rankNames) {
        this.rankNames = rankNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeRankExpressionsVersionEnum version;
    public GetDescribeRankExpressionsQueryParams withVersion(GetDescribeRankExpressionsVersionEnum version) {
        this.version = version;
        return this;
    }
}