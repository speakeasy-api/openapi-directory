package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWebhookByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetWebhookByIdQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
}