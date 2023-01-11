package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResponsePlanQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=arn")
    public String arn;
    public GetResponsePlanQueryParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}