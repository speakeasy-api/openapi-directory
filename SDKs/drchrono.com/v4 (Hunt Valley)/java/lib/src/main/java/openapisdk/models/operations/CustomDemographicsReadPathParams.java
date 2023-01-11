package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomDemographicsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CustomDemographicsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}