package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TendersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TendersDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}