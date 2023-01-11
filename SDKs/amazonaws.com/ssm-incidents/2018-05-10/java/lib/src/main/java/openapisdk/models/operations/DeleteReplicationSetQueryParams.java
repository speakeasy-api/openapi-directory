package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReplicationSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=arn")
    public String arn;
    public DeleteReplicationSetQueryParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}