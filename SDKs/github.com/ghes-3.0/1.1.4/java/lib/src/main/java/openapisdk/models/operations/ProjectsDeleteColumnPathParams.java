package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsDeleteColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=column_id")
    public Long columnId;
    public ProjectsDeleteColumnPathParams withColumnId(Long columnId) {
        this.columnId = columnId;
        return this;
    }
}