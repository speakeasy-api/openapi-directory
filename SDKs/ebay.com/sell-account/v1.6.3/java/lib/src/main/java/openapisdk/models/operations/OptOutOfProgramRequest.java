package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptOutOfProgramRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Program request;
    public OptOutOfProgramRequest withRequest(openapisdk.models.shared.Program request) {
        this.request = request;
        return this;
    }
    public OptOutOfProgramSecurity security;
    public OptOutOfProgramRequest withSecurity(OptOutOfProgramSecurity security) {
        this.security = security;
        return this;
    }
}