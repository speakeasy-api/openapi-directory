package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserSSubscriptionGroupStatusSmsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=external_id")
    public String externalId;
    public ListUserSSubscriptionGroupStatusSmsQueryParams withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phone")
    public String phone;
    public ListUserSSubscriptionGroupStatusSmsQueryParams withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subscription_group_id")
    public String subscriptionGroupId;
    public ListUserSSubscriptionGroupStatusSmsQueryParams withSubscriptionGroupId(String subscriptionGroupId) {
        this.subscriptionGroupId = subscriptionGroupId;
        return this;
    }
}