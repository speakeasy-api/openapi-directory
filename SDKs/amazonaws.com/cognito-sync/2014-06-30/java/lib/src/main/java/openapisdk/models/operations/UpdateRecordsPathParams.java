package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRecordsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=DatasetName")
    public String datasetName;
    public UpdateRecordsPathParams withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityId")
    public String identityId;
    public UpdateRecordsPathParams withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public UpdateRecordsPathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}