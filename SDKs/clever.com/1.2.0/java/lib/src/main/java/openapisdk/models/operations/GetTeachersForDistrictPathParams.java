package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeachersForDistrictPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetTeachersForDistrictPathParams withId(String id) {
        this.id = id;
        return this;
    }
}