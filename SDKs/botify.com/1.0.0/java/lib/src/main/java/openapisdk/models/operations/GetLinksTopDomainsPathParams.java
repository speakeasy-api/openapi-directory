package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLinksTopDomainsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analysis_slug")
    public String analysisSlug;
    public GetLinksTopDomainsPathParams withAnalysisSlug(String analysisSlug) {
        this.analysisSlug = analysisSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_slug")
    public String projectSlug;
    public GetLinksTopDomainsPathParams withProjectSlug(String projectSlug) {
        this.projectSlug = projectSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetLinksTopDomainsPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}