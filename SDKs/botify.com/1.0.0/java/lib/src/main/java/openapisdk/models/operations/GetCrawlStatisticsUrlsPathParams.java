package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCrawlStatisticsUrlsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analysis_slug")
    public String analysisSlug;
    public GetCrawlStatisticsUrlsPathParams withAnalysisSlug(String analysisSlug) {
        this.analysisSlug = analysisSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=list_type")
    public GetCrawlStatisticsUrlsListTypeEnum listType;
    public GetCrawlStatisticsUrlsPathParams withListType(GetCrawlStatisticsUrlsListTypeEnum listType) {
        this.listType = listType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_slug")
    public String projectSlug;
    public GetCrawlStatisticsUrlsPathParams withProjectSlug(String projectSlug) {
        this.projectSlug = projectSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetCrawlStatisticsUrlsPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}