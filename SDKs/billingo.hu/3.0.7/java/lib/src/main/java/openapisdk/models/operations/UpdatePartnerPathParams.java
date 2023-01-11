package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePartnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public UpdatePartnerPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}