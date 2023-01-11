package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePartnerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeletePartnerPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}