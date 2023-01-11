package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeacherPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetTeacherPathParams withId(String id) {
        this.id = id;
        return this;
    }
}