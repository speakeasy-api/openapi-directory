package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUuidVersionVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public Long version;
    public GetUuidVersionVersionPathParams withVersion(Long version) {
        this.version = version;
        return this;
    }
}