package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDatasetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DatasetName")
    public String datasetName;
    public DescribeDatasetPathParams withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityId")
    public String identityId;
    public DescribeDatasetPathParams withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public DescribeDatasetPathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}