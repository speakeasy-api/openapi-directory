package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceARN")
    public String resourceARN;
    public UntagResourcePathParams withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
}