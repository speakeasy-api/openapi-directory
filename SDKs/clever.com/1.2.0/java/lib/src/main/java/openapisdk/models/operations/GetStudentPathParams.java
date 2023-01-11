package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStudentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetStudentPathParams withId(String id) {
        this.id = id;
        return this;
    }
}