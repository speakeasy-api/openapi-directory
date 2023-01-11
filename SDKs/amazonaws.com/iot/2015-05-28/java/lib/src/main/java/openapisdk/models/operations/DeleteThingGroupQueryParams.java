package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteThingGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expectedVersion")
    public Long expectedVersion;
    public DeleteThingGroupQueryParams withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
}