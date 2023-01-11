package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TendersUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TendersUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}