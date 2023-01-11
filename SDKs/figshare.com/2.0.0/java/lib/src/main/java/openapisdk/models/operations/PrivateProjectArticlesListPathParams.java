package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateProjectArticlesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;
    public PrivateProjectArticlesListPathParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
}