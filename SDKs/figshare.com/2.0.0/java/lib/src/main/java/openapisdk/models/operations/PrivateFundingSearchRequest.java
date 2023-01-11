package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateFundingSearchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FundingSearch request;
    public PrivateFundingSearchRequest withRequest(openapisdk.models.shared.FundingSearch request) {
        this.request = request;
        return this;
    }
    public PrivateFundingSearchSecurity security;
    public PrivateFundingSearchRequest withSecurity(PrivateFundingSearchSecurity security) {
        this.security = security;
        return this;
    }
}