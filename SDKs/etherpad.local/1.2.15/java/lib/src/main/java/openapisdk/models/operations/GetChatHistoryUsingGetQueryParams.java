package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChatHistoryUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetChatHistoryUsingGetQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetChatHistoryUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetChatHistoryUsingGetQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}