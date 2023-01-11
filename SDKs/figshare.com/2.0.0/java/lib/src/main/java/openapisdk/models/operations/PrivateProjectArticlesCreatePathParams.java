package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectArticlesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public PrivateProjectArticlesCreatePathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}