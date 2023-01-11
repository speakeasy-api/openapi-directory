package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ARN")
    public String arn;
    public UntagResourcePathParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}