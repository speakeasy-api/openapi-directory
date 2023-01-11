package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public UpdatePaymentPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}