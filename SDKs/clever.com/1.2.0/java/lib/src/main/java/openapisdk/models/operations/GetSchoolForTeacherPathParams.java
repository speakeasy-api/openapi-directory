package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchoolForTeacherPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSchoolForTeacherPathParams withId(String id) {
        this.id = id;
        return this;
    }
}