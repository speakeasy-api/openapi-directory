package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateClusterConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public UpdateClusterConfigPathParams withName(String name) {
        this.name = name;
        return this;
    }
}