package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTagRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.UpdateTagModel updateTagModel;
    public UpdateTagRequests withUpdateTagModel(openapisdk.models.shared.UpdateTagModel updateTagModel) {
        this.updateTagModel = updateTagModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTagModel updateTagModel1;
    public UpdateTagRequests withUpdateTagModel1(openapisdk.models.shared.UpdateTagModel updateTagModel1) {
        this.updateTagModel1 = updateTagModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.UpdateTagModel updateTagModel2;
    public UpdateTagRequests withUpdateTagModel2(openapisdk.models.shared.UpdateTagModel updateTagModel2) {
        this.updateTagModel2 = updateTagModel2;
        return this;
    }
}