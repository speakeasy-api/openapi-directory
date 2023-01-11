package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=projectId")
    public String projectId;
    public ExportProjectPathParams withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}