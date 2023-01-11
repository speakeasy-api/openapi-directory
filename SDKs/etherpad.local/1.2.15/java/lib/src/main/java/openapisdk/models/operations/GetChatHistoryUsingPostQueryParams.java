package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChatHistoryUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetChatHistoryUsingPostQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetChatHistoryUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetChatHistoryUsingPostQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}