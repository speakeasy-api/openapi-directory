package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStudentsForSchoolPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetStudentsForSchoolPathParams withId(String id) {
        this.id = id;
        return this;
    }
}