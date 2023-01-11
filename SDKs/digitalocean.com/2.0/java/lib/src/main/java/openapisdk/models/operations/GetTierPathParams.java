package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTierPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slug")
    public String slug;
    public GetTierPathParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}