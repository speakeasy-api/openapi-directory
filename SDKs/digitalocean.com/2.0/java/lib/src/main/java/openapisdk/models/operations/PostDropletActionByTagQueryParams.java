package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDropletActionByTagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tag_name")
    public String tagName;
    public PostDropletActionByTagQueryParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}