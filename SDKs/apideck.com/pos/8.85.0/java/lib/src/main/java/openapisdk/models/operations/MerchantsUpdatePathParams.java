package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MerchantsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MerchantsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}