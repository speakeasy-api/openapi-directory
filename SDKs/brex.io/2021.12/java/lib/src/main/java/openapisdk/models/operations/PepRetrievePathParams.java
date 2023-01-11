package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PepRetrievePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PepRetrievePathParams withId(String id) {
        this.id = id;
        return this;
    }
}