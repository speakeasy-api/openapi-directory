package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EcommerceDeliveryHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public EcommerceDeliveryHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}