package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNotificationsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteNotificationsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}