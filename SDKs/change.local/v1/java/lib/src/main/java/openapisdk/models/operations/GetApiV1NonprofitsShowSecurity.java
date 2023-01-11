package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1NonprofitsShowSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeBasicAuth basicAuth;
    public GetApiV1NonprofitsShowSecurity withBasicAuth(openapisdk.models.shared.SchemeBasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
}