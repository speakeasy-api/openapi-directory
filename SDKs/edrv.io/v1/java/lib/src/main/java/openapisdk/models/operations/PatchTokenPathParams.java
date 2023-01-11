package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchTokenPathParams withId(String id) {
        this.id = id;
        return this;
    }
}