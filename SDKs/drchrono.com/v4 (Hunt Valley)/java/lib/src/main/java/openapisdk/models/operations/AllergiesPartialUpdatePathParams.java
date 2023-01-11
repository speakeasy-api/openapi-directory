package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AllergiesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public AllergiesPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}