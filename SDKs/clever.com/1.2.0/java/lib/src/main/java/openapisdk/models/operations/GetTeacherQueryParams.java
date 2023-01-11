package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeacherQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetTeacherQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
}