package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBankAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public UpdateBankAccountPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}