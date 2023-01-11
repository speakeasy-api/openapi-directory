package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDatasetContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetName")
    public String datasetName;
    public DeleteDatasetContentPathParams withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
}