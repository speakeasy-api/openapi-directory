package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUserSSubscriptionGroupSmsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=external_id")
    public String externalId;
    public ListUserSSubscriptionGroupSmsQueryParams withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public ListUserSSubscriptionGroupSmsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public ListUserSSubscriptionGroupSmsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phone")
    public String phone;
    public ListUserSSubscriptionGroupSmsQueryParams withPhone(String phone) {
        this.phone = phone;
        return this;
    }
}