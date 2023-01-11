package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEthereumBalanceRequest {
    public GetEthereumBalanceHeaders headers;
    public GetEthereumBalanceRequest withHeaders(GetEthereumBalanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetEthereumBalanceRequest request;
    public GetEthereumBalanceRequest withRequest(openapisdk.models.shared.GetEthereumBalanceRequest request) {
        this.request = request;
        return this;
    }
}