package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCrawlStatisticsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analysis_slug")
    public String analysisSlug;
    public GetCrawlStatisticsPathParams withAnalysisSlug(String analysisSlug) {
        this.analysisSlug = analysisSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_slug")
    public String projectSlug;
    public GetCrawlStatisticsPathParams withProjectSlug(String projectSlug) {
        this.projectSlug = projectSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetCrawlStatisticsPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}