package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBankAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteBankAccountPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}