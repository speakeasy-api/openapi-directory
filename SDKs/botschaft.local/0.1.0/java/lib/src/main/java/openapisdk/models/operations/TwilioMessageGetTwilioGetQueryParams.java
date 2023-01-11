package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TwilioMessageGetTwilioGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=base64_message")
    public String base64Message;
    public TwilioMessageGetTwilioGetQueryParams withBase64Message(String base64Message) {
        this.base64Message = base64Message;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=message")
    public String message;
    public TwilioMessageGetTwilioGetQueryParams withMessage(String message) {
        this.message = message;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public String to;
    public TwilioMessageGetTwilioGetQueryParams withTo(String to) {
        this.to = to;
        return this;
    }
}