package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MessagesOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}