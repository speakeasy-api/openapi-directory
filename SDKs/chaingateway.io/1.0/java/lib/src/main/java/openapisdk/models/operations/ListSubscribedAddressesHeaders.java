package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSubscribedAddressesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public ListSubscribedAddressesHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public ListSubscribedAddressesHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}