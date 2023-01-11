package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartCanaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public StartCanaryPathParams withName(String name) {
        this.name = name;
        return this;
    }
}