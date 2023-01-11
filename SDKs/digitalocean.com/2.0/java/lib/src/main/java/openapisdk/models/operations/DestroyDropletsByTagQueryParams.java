package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DestroyDropletsByTagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag_name")
    public String tagName;
    public DestroyDropletsByTagQueryParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}