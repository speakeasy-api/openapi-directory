package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ARN")
    public String arn;
    public ListTagsPathParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}