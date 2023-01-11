package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDynamicThingGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expectedVersion")
    public Long expectedVersion;
    public DeleteDynamicThingGroupQueryParams withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
}