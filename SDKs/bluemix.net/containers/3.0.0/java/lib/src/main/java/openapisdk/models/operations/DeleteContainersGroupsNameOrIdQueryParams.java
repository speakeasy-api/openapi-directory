package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContainersGroupsNameOrIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=force")
    public String force;
    public DeleteContainersGroupsNameOrIdQueryParams withForce(String force) {
        this.force = force;
        return this;
    }
}