package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForResource20200531QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public ListTagsForResource20200531QueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
}