package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchoolsForDistrictPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSchoolsForDistrictPathParams withId(String id) {
        this.id = id;
        return this;
    }
}