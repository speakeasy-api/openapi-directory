package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetDistrictQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
}