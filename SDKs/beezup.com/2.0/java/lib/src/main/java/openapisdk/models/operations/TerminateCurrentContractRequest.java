package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TerminateCurrentContractRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TerminateContract request;
    public TerminateCurrentContractRequest withRequest(openapisdk.models.shared.TerminateContract request) {
        this.request = request;
        return this;
    }
}