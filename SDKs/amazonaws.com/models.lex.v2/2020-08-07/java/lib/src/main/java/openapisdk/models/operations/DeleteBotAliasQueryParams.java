package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBotAliasQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skipResourceInUseCheck")
    public Boolean skipResourceInUseCheck;
    public DeleteBotAliasQueryParams withSkipResourceInUseCheck(Boolean skipResourceInUseCheck) {
        this.skipResourceInUseCheck = skipResourceInUseCheck;
        return this;
    }
}