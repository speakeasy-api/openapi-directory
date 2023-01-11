package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIncidentRecordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=arn")
    public String arn;
    public GetIncidentRecordQueryParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}