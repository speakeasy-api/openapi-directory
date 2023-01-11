package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteClickwrapsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteClickwrapsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}