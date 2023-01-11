package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoveSourceIdentifierFromSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRemoveSourceIdentifierFromSubscriptionActionEnum action;
    public GetRemoveSourceIdentifierFromSubscriptionQueryParams withAction(GetRemoveSourceIdentifierFromSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceIdentifier")
    public String sourceIdentifier;
    public GetRemoveSourceIdentifierFromSubscriptionQueryParams withSourceIdentifier(String sourceIdentifier) {
        this.sourceIdentifier = sourceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubscriptionName")
    public String subscriptionName;
    public GetRemoveSourceIdentifierFromSubscriptionQueryParams withSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRemoveSourceIdentifierFromSubscriptionVersionEnum version;
    public GetRemoveSourceIdentifierFromSubscriptionQueryParams withVersion(GetRemoveSourceIdentifierFromSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}