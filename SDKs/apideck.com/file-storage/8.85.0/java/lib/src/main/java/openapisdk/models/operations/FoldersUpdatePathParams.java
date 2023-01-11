package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FoldersUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public FoldersUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}