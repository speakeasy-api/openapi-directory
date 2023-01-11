package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAddonQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=preserve")
    public Boolean preserve;
    public DeleteAddonQueryParams withPreserve(Boolean preserve) {
        this.preserve = preserve;
        return this;
    }
}