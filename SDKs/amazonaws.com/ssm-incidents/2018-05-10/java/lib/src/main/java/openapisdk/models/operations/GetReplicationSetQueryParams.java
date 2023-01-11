package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReplicationSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=arn")
    public String arn;
    public GetReplicationSetQueryParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}