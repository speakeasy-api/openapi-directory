package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsUpdateColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=column_id")
    public Long columnId;
    public ProjectsUpdateColumnPathParams withColumnId(Long columnId) {
        this.columnId = columnId;
        return this;
    }
}