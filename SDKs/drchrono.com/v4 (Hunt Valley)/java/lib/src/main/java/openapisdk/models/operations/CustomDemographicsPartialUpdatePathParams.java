package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomDemographicsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CustomDemographicsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}