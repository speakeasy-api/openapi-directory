package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPartnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetPartnerPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}