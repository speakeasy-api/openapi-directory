package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TwilioMessageGetTwilioGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=authorization")
    public String authorization;
    public TwilioMessageGetTwilioGetHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}