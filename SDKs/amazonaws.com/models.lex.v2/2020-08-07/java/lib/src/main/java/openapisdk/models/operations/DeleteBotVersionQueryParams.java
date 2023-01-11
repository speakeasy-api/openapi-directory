package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBotVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skipResourceInUseCheck")
    public Boolean skipResourceInUseCheck;
    public DeleteBotVersionQueryParams withSkipResourceInUseCheck(Boolean skipResourceInUseCheck) {
        this.skipResourceInUseCheck = skipResourceInUseCheck;
        return this;
    }
}