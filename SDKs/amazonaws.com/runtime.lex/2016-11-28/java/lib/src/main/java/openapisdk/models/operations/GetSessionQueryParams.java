package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSessionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=checkpointLabelFilter")
    public String checkpointLabelFilter;
    public GetSessionQueryParams withCheckpointLabelFilter(String checkpointLabelFilter) {
        this.checkpointLabelFilter = checkpointLabelFilter;
        return this;
    }
}