package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAddSourceIdentifierToSubscriptionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAddSourceIdentifierToSubscriptionActionEnum action;
    public GetAddSourceIdentifierToSubscriptionQueryParams withAction(GetAddSourceIdentifierToSubscriptionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceIdentifier")
    public String sourceIdentifier;
    public GetAddSourceIdentifierToSubscriptionQueryParams withSourceIdentifier(String sourceIdentifier) {
        this.sourceIdentifier = sourceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubscriptionName")
    public String subscriptionName;
    public GetAddSourceIdentifierToSubscriptionQueryParams withSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAddSourceIdentifierToSubscriptionVersionEnum version;
    public GetAddSourceIdentifierToSubscriptionQueryParams withVersion(GetAddSourceIdentifierToSubscriptionVersionEnum version) {
        this.version = version;
        return this;
    }
}