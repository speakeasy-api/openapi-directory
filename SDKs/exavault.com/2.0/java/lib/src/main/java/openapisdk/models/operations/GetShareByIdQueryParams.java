package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShareByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetShareByIdQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
}