package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsGetColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=column_id")
    public Long columnId;
    public ProjectsGetColumnPathParams withColumnId(Long columnId) {
        this.columnId = columnId;
        return this;
    }
}