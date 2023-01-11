package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCanaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public UpdateCanaryPathParams withName(String name) {
        this.name = name;
        return this;
    }
}