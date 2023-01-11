package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PipelinesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PipelinesDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}