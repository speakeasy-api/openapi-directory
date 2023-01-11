package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsMoveColumnPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=column_id")
    public Long columnId;
    public ProjectsMoveColumnPathParams withColumnId(Long columnId) {
        this.columnId = columnId;
        return this;
    }
}