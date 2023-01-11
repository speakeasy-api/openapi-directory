package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContainersNameOrIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=force")
    public Boolean force;
    public DeleteContainersNameOrIdQueryParams withForce(Boolean force) {
        this.force = force;
        return this;
    }
}