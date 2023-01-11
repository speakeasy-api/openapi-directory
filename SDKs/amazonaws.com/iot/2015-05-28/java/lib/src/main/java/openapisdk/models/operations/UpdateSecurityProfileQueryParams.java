package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSecurityProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expectedVersion")
    public Long expectedVersion;
    public UpdateSecurityProfileQueryParams withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
}