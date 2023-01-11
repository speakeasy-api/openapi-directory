package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStudentsForTeacherPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetStudentsForTeacherPathParams withId(String id) {
        this.id = id;
        return this;
    }
}