package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSavedFiltersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_slug")
    public String projectSlug;
    public GetSavedFiltersPathParams withProjectSlug(String projectSlug) {
        this.projectSlug = projectSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public GetSavedFiltersPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}