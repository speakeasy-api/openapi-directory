package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApiV1DonationsCreateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeBasicAuth basicAuth;
    public PostApiV1DonationsCreateSecurity withBasicAuth(openapisdk.models.shared.SchemeBasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
}