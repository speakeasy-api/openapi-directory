package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCanaryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DeleteCanaryPathParams withName(String name) {
        this.name = name;
        return this;
    }
}