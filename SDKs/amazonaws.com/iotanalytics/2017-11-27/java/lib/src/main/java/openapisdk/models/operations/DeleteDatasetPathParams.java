package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDatasetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetName")
    public String datasetName;
    public DeleteDatasetPathParams withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
}