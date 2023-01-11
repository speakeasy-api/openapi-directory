package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComponentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=arn")
    public String arn;
    public GetComponentPathParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}