package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeletePaymentPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}