package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}