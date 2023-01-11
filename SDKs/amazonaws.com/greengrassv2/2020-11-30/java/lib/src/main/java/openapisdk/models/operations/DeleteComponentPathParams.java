package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteComponentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=arn")
    public String arn;
    public DeleteComponentPathParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}