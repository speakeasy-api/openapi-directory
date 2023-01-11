package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteThingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expectedVersion")
    public Long expectedVersion;
    public DeleteThingQueryParams withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
}