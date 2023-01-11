package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignDefaultProjectResourcesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema request;
    public AssignDefaultProjectResourcesRequest withRequest(openapisdk.models.shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema request) {
        this.request = request;
        return this;
    }
}