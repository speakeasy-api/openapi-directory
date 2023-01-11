package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomDemographicsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CustomDemographicsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}