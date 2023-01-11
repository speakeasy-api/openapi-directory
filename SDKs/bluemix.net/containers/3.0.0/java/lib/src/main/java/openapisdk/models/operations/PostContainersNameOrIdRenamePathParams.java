package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersNameOrIdRenamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name_or_id")
    public String nameOrId;
    public PostContainersNameOrIdRenamePathParams withNameOrId(String nameOrId) {
        this.nameOrId = nameOrId;
        return this;
    }
}