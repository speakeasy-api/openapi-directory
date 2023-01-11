package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsListCardsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=column_id")
    public Long columnId;
    public ProjectsListCardsPathParams withColumnId(Long columnId) {
        this.columnId = columnId;
        return this;
    }
}