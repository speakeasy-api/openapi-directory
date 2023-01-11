package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBankAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetBankAccountPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}