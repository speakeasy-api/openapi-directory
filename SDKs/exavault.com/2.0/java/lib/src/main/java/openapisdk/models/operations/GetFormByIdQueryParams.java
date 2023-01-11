package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFormByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetFormByIdQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
}