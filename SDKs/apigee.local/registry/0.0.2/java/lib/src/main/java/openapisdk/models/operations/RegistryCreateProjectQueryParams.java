package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryCreateProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=project_id")
    public String projectId;
    public RegistryCreateProjectQueryParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}