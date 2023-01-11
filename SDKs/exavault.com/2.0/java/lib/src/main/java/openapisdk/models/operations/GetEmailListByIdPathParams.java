package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmailListByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetEmailListByIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}