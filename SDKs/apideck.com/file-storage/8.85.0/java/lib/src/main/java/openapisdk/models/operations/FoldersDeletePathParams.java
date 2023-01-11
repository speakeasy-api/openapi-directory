package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FoldersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public FoldersDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}