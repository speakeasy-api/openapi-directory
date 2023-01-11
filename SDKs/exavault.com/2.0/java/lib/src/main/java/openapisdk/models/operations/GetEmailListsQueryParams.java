package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmailListsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetEmailListsQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
}