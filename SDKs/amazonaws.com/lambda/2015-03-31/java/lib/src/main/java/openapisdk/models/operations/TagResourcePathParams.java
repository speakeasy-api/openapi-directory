package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ARN")
    public String arn;
    public TagResourcePathParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}