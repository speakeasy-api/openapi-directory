package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PepMonitorUnregisterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PepMonitorUnregisterPathParams withId(String id) {
        this.id = id;
        return this;
    }
}