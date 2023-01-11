package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnterpriseAdminListGlobalWebhooksHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public EnterpriseAdminListGlobalWebhooksHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}