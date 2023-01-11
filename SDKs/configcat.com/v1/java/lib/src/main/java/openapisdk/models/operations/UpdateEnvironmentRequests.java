package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnvironmentRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.UpdateEnvironmentModel updateEnvironmentModel;
    public UpdateEnvironmentRequests withUpdateEnvironmentModel(openapisdk.models.shared.UpdateEnvironmentModel updateEnvironmentModel) {
        this.updateEnvironmentModel = updateEnvironmentModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateEnvironmentModel updateEnvironmentModel1;
    public UpdateEnvironmentRequests withUpdateEnvironmentModel1(openapisdk.models.shared.UpdateEnvironmentModel updateEnvironmentModel1) {
        this.updateEnvironmentModel1 = updateEnvironmentModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.UpdateEnvironmentModel updateEnvironmentModel2;
    public UpdateEnvironmentRequests withUpdateEnvironmentModel2(openapisdk.models.shared.UpdateEnvironmentModel updateEnvironmentModel2) {
        this.updateEnvironmentModel2 = updateEnvironmentModel2;
        return this;
    }
}