package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStudentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public String include;
    public GetStudentQueryParams withInclude(String include) {
        this.include = include;
        return this;
    }
}