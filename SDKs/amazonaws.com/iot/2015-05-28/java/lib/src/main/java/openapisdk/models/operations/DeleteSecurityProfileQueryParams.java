package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSecurityProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expectedVersion")
    public Long expectedVersion;
    public DeleteSecurityProfileQueryParams withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
}