package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminDeleteGlobalWebhookHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public EnterpriseAdminDeleteGlobalWebhookHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}