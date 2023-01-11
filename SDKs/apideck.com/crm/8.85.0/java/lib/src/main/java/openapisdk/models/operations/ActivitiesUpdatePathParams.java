package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivitiesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public ActivitiesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}