package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContainersNameOrIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name_or_id")
    public String nameOrId;
    public DeleteContainersNameOrIdPathParams withNameOrId(String nameOrId) {
        this.nameOrId = nameOrId;
        return this;
    }
}