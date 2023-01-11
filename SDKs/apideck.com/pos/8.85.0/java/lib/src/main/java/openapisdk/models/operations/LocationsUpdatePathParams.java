package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LocationsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LocationsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}