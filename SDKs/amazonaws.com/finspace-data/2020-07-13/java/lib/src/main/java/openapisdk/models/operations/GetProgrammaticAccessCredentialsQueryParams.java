package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProgrammaticAccessCredentialsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=durationInMinutes")
    public Long durationInMinutes;
    public GetProgrammaticAccessCredentialsQueryParams withDurationInMinutes(Long durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=environmentId")
    public String environmentId;
    public GetProgrammaticAccessCredentialsQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
}