package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TwilioMessagePostTwilioPostHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=authorization")
    public String authorization;
    public TwilioMessagePostTwilioPostHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}