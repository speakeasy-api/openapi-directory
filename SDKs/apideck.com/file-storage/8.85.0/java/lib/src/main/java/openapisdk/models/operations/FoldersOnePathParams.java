package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FoldersOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public FoldersOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}