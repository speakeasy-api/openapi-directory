package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddOrUpdateIntegrationLinkRequests {
    @SpeakeasyMetadata("request:mediaType=application/*+json")
    public openapisdk.models.shared.AddOrUpdateIntegrationLinkModel addOrUpdateIntegrationLinkModel;
    public AddOrUpdateIntegrationLinkRequests withAddOrUpdateIntegrationLinkModel(openapisdk.models.shared.AddOrUpdateIntegrationLinkModel addOrUpdateIntegrationLinkModel) {
        this.addOrUpdateIntegrationLinkModel = addOrUpdateIntegrationLinkModel;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddOrUpdateIntegrationLinkModel addOrUpdateIntegrationLinkModel1;
    public AddOrUpdateIntegrationLinkRequests withAddOrUpdateIntegrationLinkModel1(openapisdk.models.shared.AddOrUpdateIntegrationLinkModel addOrUpdateIntegrationLinkModel1) {
        this.addOrUpdateIntegrationLinkModel1 = addOrUpdateIntegrationLinkModel1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.AddOrUpdateIntegrationLinkModel addOrUpdateIntegrationLinkModel2;
    public AddOrUpdateIntegrationLinkRequests withAddOrUpdateIntegrationLinkModel2(openapisdk.models.shared.AddOrUpdateIntegrationLinkModel addOrUpdateIntegrationLinkModel2) {
        this.addOrUpdateIntegrationLinkModel2 = addOrUpdateIntegrationLinkModel2;
        return this;
    }
}