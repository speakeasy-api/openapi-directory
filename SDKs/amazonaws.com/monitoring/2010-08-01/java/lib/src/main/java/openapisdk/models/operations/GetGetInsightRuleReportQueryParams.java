package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetGetInsightRuleReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetInsightRuleReportActionEnum action;
    public GetGetInsightRuleReportQueryParams withAction(GetGetInsightRuleReportActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndTime")
    public OffsetDateTime endTime;
    public GetGetInsightRuleReportQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxContributorCount")
    public Long maxContributorCount;
    public GetGetInsightRuleReportQueryParams withMaxContributorCount(Long maxContributorCount) {
        this.maxContributorCount = maxContributorCount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Metrics")
    public String[] metrics;
    public GetGetInsightRuleReportQueryParams withMetrics(String[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OrderBy")
    public String orderBy;
    public GetGetInsightRuleReportQueryParams withOrderBy(String orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Period")
    public Long period;
    public GetGetInsightRuleReportQueryParams withPeriod(Long period) {
        this.period = period;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RuleName")
    public String ruleName;
    public GetGetInsightRuleReportQueryParams withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartTime")
    public OffsetDateTime startTime;
    public GetGetInsightRuleReportQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetInsightRuleReportVersionEnum version;
    public GetGetInsightRuleReportQueryParams withVersion(GetGetInsightRuleReportVersionEnum version) {
        this.version = version;
        return this;
    }
}