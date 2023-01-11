package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppendChatMessageUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorID")
    public String authorID;
    public AppendChatMessageUsingPostQueryParams withAuthorId(String authorID) {
        this.authorID = authorID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public AppendChatMessageUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public AppendChatMessageUsingPostQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public String time;
    public AppendChatMessageUsingPostQueryParams withTime(String time) {
        this.time = time;
        return this;
    }
}