package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatasetContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetName")
    public String datasetName;
    public GetDatasetContentPathParams withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
}