package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CreateTagModel createTagModel;
    public CreateTagRequests withCreateTagModel(openapisdk.models.shared.CreateTagModel createTagModel) {
        this.createTagModel = createTagModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTagModel createTagModel1;
    public CreateTagRequests withCreateTagModel1(openapisdk.models.shared.CreateTagModel createTagModel1) {
        this.createTagModel1 = createTagModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CreateTagModel createTagModel2;
    public CreateTagRequests withCreateTagModel2(openapisdk.models.shared.CreateTagModel createTagModel2) {
        this.createTagModel2 = createTagModel2;
        return this;
    }
}