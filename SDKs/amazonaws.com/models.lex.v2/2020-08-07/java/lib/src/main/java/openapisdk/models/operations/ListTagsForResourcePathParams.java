package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceARN")
    public String resourceARN;
    public ListTagsForResourcePathParams withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
}