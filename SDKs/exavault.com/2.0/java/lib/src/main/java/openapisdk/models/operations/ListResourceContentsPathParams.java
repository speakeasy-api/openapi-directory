package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResourceContentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public ListResourceContentsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}