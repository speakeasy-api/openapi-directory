package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDatasetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=datasetName")
    public String datasetName;
    public DescribeDatasetPathParams withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
}