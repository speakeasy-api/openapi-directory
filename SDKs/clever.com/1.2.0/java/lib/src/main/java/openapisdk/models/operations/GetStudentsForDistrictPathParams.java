package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStudentsForDistrictPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetStudentsForDistrictPathParams withId(String id) {
        this.id = id;
        return this;
    }
}