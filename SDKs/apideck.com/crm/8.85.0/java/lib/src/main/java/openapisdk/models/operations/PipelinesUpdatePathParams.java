package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PipelinesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PipelinesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}