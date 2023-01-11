package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStudentForContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetStudentForContactPathParams withId(String id) {
        this.id = id;
        return this;
    }
}