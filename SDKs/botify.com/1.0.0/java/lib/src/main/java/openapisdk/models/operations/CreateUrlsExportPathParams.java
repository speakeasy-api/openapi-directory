package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUrlsExportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analysis_slug")
    public String analysisSlug;
    public CreateUrlsExportPathParams withAnalysisSlug(String analysisSlug) {
        this.analysisSlug = analysisSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_slug")
    public String projectSlug;
    public CreateUrlsExportPathParams withProjectSlug(String projectSlug) {
        this.projectSlug = projectSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public CreateUrlsExportPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}