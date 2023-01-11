package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveTagsFromVaultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=operation")
    public RemoveTagsFromVaultOperationEnum operation;
    public RemoveTagsFromVaultQueryParams withOperation(RemoveTagsFromVaultOperationEnum operation) {
        this.operation = operation;
        return this;
    }
}