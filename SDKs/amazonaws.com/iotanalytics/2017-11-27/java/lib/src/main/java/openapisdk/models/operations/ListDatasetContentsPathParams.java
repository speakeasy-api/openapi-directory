package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatasetContentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetName")
    public String datasetName;
    public ListDatasetContentsPathParams withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
}