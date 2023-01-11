package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeRulesActionEnum action;
    public GetDescribeRulesQueryParams withAction(GetDescribeRulesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ListenerArn")
    public String listenerArn;
    public GetDescribeRulesQueryParams withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeRulesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public GetDescribeRulesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleArns")
    public String[] ruleArns;
    public GetDescribeRulesQueryParams withRuleArns(String[] ruleArns) {
        this.ruleArns = ruleArns;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeRulesVersionEnum version;
    public GetDescribeRulesQueryParams withVersion(GetDescribeRulesVersionEnum version) {
        this.version = version;
        return this;
    }
}