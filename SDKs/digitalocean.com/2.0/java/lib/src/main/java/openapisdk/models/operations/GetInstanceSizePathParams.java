package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstanceSizePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=slug")
    public String slug;
    public GetInstanceSizePathParams withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}