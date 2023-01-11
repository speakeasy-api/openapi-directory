package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSectionsForDistrictPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSectionsForDistrictPathParams withId(String id) {
        this.id = id;
        return this;
    }
}