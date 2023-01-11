package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendClientsMessageUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=msg")
    public String msg;
    public SendClientsMessageUsingGetQueryParams withMsg(String msg) {
        this.msg = msg;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=padID")
    public String padID;
    public SendClientsMessageUsingGetQueryParams withPadId(String padID) {
        this.padID = padID;
        return this;
    }
}