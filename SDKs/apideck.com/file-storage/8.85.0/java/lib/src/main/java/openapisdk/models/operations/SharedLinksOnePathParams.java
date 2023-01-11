package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SharedLinksOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public SharedLinksOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}