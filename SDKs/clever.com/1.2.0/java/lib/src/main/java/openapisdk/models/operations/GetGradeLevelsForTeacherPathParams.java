package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGradeLevelsForTeacherPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGradeLevelsForTeacherPathParams withId(String id) {
        this.id = id;
        return this;
    }
}