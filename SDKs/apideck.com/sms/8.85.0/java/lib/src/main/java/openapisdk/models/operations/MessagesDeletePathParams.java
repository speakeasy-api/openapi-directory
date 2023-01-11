package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MessagesDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}