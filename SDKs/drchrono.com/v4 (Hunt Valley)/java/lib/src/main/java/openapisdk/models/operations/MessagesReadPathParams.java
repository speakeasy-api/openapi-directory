package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MessagesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}