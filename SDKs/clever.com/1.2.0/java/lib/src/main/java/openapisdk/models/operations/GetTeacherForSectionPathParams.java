package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeacherForSectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetTeacherForSectionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}