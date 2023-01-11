package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelJobExecutionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=force")
    public Boolean force;
    public CancelJobExecutionQueryParams withForce(Boolean force) {
        this.force = force;
        return this;
    }
}