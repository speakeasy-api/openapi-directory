package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDatasetContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetName")
    public String datasetName;
    public CreateDatasetContentPathParams withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
}