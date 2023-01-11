package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChatHeadUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public GetChatHeadUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}