package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGanalyticsOrphanUrLsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=analysis_slug")
    public String analysisSlug;
    public GetGanalyticsOrphanUrLsPathParams withAnalysisSlug(String analysisSlug) {
        this.analysisSlug = analysisSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=medium")
    public GetGanalyticsOrphanUrLsMediumEnum medium;
    public GetGanalyticsOrphanUrLsPathParams withMedium(GetGanalyticsOrphanUrLsMediumEnum medium) {
        this.medium = medium;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_slug")
    public String projectSlug;
    public GetGanalyticsOrphanUrLsPathParams withProjectSlug(String projectSlug) {
        this.projectSlug = projectSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=source")
    public GetGanalyticsOrphanUrLsSourceEnum source;
    public GetGanalyticsOrphanUrLsPathParams withSource(GetGanalyticsOrphanUrLsSourceEnum source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetGanalyticsOrphanUrLsPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}