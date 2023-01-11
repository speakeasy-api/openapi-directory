package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClearAddressHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public ClearAddressHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}