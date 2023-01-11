package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserHostedPropertyValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_key")
    public String appKey;
    public DeleteUserHostedPropertyValuePathParams withAppKey(String appKey) {
        this.appKey = appKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=property_name")
    public String propertyName;
    public DeleteUserHostedPropertyValuePathParams withPropertyName(String propertyName) {
        this.propertyName = propertyName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;
    public DeleteUserHostedPropertyValuePathParams withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
}