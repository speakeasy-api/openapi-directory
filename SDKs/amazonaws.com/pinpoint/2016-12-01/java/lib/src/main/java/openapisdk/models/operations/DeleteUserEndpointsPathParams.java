package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserEndpointsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public DeleteUserEndpointsPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user-id")
    public String userId;
    public DeleteUserEndpointsPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}