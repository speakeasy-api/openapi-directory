package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateOrderInvoiceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userName")
    public String userName;
    public GenerateOrderInvoiceQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}