package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagsToVaultQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=operation")
    public AddTagsToVaultOperationEnum operation;
    public AddTagsToVaultQueryParams withOperation(AddTagsToVaultOperationEnum operation) {
        this.operation = operation;
        return this;
    }
}