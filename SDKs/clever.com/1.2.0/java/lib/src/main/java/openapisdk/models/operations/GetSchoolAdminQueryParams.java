package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchoolAdminQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetSchoolAdminQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
}