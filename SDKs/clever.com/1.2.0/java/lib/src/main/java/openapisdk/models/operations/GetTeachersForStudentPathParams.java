package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeachersForStudentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetTeachersForStudentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}