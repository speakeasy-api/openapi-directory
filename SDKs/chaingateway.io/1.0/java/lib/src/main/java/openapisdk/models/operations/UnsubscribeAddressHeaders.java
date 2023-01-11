package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsubscribeAddressHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public UnsubscribeAddressHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}