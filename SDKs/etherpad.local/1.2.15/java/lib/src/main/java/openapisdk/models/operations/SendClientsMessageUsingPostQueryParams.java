package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendClientsMessageUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=msg")
    public String msg;
    public SendClientsMessageUsingPostQueryParams withMsg(String msg) {
        this.msg = msg;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public SendClientsMessageUsingPostQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}