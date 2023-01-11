package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBillingGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expectedVersion")
    public Long expectedVersion;
    public DeleteBillingGroupQueryParams withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
}