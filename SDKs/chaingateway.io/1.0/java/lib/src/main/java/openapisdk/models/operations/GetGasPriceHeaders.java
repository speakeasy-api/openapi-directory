package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGasPriceHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetGasPriceHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public GetGasPriceHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}