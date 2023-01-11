package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSettingRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.Operation[] operations;
    public UpdateSettingRequests withOperations(openapisdk.models.shared.Operation[] operations) {
        this.operations = operations;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Operation[] operations1;
    public UpdateSettingRequests withOperations1(openapisdk.models.shared.Operation[] operations1) {
        this.operations1 = operations1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json-patch+json")
    public openapisdk.models.shared.Operation[] operations2;
    public UpdateSettingRequests withOperations2(openapisdk.models.shared.Operation[] operations2) {
        this.operations2 = operations2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.Operation[] operations3;
    public UpdateSettingRequests withOperations3(openapisdk.models.shared.Operation[] operations3) {
        this.operations3 = operations3;
        return this;
    }
}