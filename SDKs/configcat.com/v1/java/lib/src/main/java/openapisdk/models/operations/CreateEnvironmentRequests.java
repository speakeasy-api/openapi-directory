package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.CreateEnvironmentModel createEnvironmentModel;
    public CreateEnvironmentRequests withCreateEnvironmentModel(openapisdk.models.shared.CreateEnvironmentModel createEnvironmentModel) {
        this.createEnvironmentModel = createEnvironmentModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEnvironmentModel createEnvironmentModel1;
    public CreateEnvironmentRequests withCreateEnvironmentModel1(openapisdk.models.shared.CreateEnvironmentModel createEnvironmentModel1) {
        this.createEnvironmentModel1 = createEnvironmentModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.CreateEnvironmentModel createEnvironmentModel2;
    public CreateEnvironmentRequests withCreateEnvironmentModel2(openapisdk.models.shared.CreateEnvironmentModel createEnvironmentModel2) {
        this.createEnvironmentModel2 = createEnvironmentModel2;
        return this;
    }
}