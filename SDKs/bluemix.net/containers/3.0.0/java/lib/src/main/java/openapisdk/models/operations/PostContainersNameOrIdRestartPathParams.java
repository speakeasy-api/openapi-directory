package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersNameOrIdRestartPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name_or_id")
    public String nameOrId;
    public PostContainersNameOrIdRestartPathParams withNameOrId(String nameOrId) {
        this.nameOrId = nameOrId;
        return this;
    }
}