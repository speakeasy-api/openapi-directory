package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeachersForSchoolPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetTeachersForSchoolPathParams withId(String id) {
        this.id = id;
        return this;
    }
}