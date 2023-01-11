package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MessagesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}