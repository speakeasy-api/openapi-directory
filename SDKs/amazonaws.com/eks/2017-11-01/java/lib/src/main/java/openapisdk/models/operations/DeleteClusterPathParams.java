package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteClusterPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DeleteClusterPathParams withName(String name) {
        this.name = name;
        return this;
    }
}