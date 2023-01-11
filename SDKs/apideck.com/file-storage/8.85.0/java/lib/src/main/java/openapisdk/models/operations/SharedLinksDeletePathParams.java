package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SharedLinksDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public SharedLinksDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}