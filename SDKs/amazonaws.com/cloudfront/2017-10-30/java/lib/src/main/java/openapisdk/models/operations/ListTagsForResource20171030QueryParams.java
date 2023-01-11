package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForResource20171030QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public ListTagsForResource20171030QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}