package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSitemapsSamplesSitemapsOnlyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analysis_slug")
    public String analysisSlug;
    public GetSitemapsSamplesSitemapsOnlyPathParams withAnalysisSlug(String analysisSlug) {
        this.analysisSlug = analysisSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_slug")
    public String projectSlug;
    public GetSitemapsSamplesSitemapsOnlyPathParams withProjectSlug(String projectSlug) {
        this.projectSlug = projectSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetSitemapsSamplesSitemapsOnlyPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}