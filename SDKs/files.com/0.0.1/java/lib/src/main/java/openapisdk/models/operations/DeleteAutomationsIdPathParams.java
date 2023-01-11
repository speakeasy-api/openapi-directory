package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAutomationsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteAutomationsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}