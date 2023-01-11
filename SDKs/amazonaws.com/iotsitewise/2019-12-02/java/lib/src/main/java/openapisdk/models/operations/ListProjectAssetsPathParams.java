package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProjectAssetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ListProjectAssetsPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}