package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceARN")
    public String resourceARN;
    public TagResourcePathParams withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
}