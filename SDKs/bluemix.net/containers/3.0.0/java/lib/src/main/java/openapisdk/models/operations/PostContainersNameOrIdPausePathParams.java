package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersNameOrIdPausePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name_or_id")
    public String nameOrId;
    public PostContainersNameOrIdPausePathParams withNameOrId(String nameOrId) {
        this.nameOrId = nameOrId;
        return this;
    }
}