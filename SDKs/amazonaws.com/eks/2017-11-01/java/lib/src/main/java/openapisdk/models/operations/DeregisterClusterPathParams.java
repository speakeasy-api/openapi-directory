package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterClusterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DeregisterClusterPathParams withName(String name) {
        this.name = name;
        return this;
    }
}