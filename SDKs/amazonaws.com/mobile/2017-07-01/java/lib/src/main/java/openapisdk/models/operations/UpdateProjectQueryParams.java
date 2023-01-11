package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=projectId")
    public String projectId;
    public UpdateProjectQueryParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}