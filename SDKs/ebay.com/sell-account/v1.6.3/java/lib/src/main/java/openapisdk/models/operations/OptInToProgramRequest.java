package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptInToProgramRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Program request;
    public OptInToProgramRequest withRequest(openapisdk.models.shared.Program request) {
        this.request = request;
        return this;
    }
    public OptInToProgramSecurity security;
    public OptInToProgramRequest withSecurity(OptInToProgramSecurity security) {
        this.security = security;
        return this;
    }
}