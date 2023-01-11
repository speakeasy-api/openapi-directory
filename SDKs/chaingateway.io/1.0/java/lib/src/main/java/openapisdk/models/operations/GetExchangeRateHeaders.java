package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExchangeRateHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetExchangeRateHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}