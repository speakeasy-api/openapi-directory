package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecordsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DatasetName")
    public String datasetName;
    public ListRecordsPathParams withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityId")
    public String identityId;
    public ListRecordsPathParams withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public ListRecordsPathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}