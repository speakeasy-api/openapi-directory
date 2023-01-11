package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableImportFindingsForProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ProductSubscriptionArn")
    public String productSubscriptionArn;
    public DisableImportFindingsForProductPathParams withProductSubscriptionArn(String productSubscriptionArn) {
        this.productSubscriptionArn = productSubscriptionArn;
        return this;
    }
}