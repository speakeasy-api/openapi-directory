package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnalysisSummaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analysis_slug")
    public String analysisSlug;
    public GetAnalysisSummaryPathParams withAnalysisSlug(String analysisSlug) {
        this.analysisSlug = analysisSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_slug")
    public String projectSlug;
    public GetAnalysisSummaryPathParams withProjectSlug(String projectSlug) {
        this.projectSlug = projectSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetAnalysisSummaryPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}