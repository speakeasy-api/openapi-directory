package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResourceInfoByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetResourceInfoByIdQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
}