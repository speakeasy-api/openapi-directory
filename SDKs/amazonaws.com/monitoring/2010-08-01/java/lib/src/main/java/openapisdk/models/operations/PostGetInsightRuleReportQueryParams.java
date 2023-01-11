package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetInsightRuleReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetInsightRuleReportActionEnum action;
    public PostGetInsightRuleReportQueryParams withAction(PostGetInsightRuleReportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetInsightRuleReportVersionEnum version;
    public PostGetInsightRuleReportQueryParams withVersion(PostGetInsightRuleReportVersionEnum version) {
        this.version = version;
        return this;
    }
}