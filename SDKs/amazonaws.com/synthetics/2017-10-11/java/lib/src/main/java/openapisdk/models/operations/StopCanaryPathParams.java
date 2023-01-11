package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopCanaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public StopCanaryPathParams withName(String name) {
        this.name = name;
        return this;
    }
}