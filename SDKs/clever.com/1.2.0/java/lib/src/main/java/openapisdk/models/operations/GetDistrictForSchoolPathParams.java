package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictForSchoolPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDistrictForSchoolPathParams withId(String id) {
        this.id = id;
        return this;
    }
}