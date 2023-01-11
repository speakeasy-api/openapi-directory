package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeachersForSectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetTeachersForSectionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}