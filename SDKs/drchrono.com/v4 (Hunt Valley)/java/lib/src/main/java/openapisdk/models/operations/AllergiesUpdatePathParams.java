package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AllergiesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AllergiesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}