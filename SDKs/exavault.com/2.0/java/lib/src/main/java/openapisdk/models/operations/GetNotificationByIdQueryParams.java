package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNotificationByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetNotificationByIdQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
}