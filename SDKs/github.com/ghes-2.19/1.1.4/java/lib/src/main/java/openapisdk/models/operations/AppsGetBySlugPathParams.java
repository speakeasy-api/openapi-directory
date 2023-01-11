package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsGetBySlugPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_slug")
    public String appSlug;
    public AppsGetBySlugPathParams withAppSlug(String appSlug) {
        this.appSlug = appSlug;
        return this;
    }
}