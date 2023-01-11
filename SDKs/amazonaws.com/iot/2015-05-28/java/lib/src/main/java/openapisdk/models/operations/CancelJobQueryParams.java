package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelJobQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=force")
    public Boolean force;
    public CancelJobQueryParams withForce(Boolean force) {
        this.force = force;
        return this;
    }
}