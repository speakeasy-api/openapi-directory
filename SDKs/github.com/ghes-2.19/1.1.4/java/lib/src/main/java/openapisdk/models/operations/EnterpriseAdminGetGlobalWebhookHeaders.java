package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminGetGlobalWebhookHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public EnterpriseAdminGetGlobalWebhookHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}