package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skipResourceInUseCheck")
    public Boolean skipResourceInUseCheck;
    public DeleteBotQueryParams withSkipResourceInUseCheck(Boolean skipResourceInUseCheck) {
        this.skipResourceInUseCheck = skipResourceInUseCheck;
        return this;
    }
}