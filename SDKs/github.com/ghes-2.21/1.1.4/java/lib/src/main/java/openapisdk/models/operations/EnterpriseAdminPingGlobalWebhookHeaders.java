package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminPingGlobalWebhookHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public EnterpriseAdminPingGlobalWebhookHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}