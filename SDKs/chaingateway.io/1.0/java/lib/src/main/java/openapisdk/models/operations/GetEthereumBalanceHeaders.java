package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEthereumBalanceHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetEthereumBalanceHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}