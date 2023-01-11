package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminCreateGlobalWebhookHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public EnterpriseAdminCreateGlobalWebhookHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}