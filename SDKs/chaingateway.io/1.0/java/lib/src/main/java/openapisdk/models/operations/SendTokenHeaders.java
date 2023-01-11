package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendTokenHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public SendTokenHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}