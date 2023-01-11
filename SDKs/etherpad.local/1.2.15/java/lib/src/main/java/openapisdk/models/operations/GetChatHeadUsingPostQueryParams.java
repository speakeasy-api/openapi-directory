package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChatHeadUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetChatHeadUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}