package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class HistoryListForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Integer userId;
    public HistoryListForUserPathParams withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}