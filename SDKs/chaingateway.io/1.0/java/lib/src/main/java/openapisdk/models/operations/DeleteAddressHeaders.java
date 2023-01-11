package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAddressHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public DeleteAddressHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}