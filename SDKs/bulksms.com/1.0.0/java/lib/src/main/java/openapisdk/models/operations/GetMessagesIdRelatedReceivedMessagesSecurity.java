package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMessagesIdRelatedReceivedMessagesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeBasicAuth basicAuth;
    public GetMessagesIdRelatedReceivedMessagesSecurity withBasicAuth(openapisdk.models.shared.SchemeBasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
}