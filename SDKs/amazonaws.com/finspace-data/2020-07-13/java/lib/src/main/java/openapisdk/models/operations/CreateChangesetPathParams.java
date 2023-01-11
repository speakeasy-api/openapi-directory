package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChangesetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetId")
    public String datasetId;
    public CreateChangesetPathParams withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
}