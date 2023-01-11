package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSlotTypeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skipResourceInUseCheck")
    public Boolean skipResourceInUseCheck;
    public DeleteSlotTypeQueryParams withSkipResourceInUseCheck(Boolean skipResourceInUseCheck) {
        this.skipResourceInUseCheck = skipResourceInUseCheck;
        return this;
    }
}