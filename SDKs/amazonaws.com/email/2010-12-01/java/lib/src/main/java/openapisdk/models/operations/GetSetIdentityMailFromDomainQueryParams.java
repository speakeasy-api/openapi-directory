package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetIdentityMailFromDomainQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetIdentityMailFromDomainActionEnum action;
    public GetSetIdentityMailFromDomainQueryParams withAction(GetSetIdentityMailFromDomainActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BehaviorOnMXFailure")
    public GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum behaviorOnMXFailure;
    public GetSetIdentityMailFromDomainQueryParams withBehaviorOnMxFailure(GetSetIdentityMailFromDomainBehaviorOnMxFailureEnum behaviorOnMXFailure) {
        this.behaviorOnMXFailure = behaviorOnMXFailure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Identity")
    public String identity;
    public GetSetIdentityMailFromDomainQueryParams withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MailFromDomain")
    public String mailFromDomain;
    public GetSetIdentityMailFromDomainQueryParams withMailFromDomain(String mailFromDomain) {
        this.mailFromDomain = mailFromDomain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetIdentityMailFromDomainVersionEnum version;
    public GetSetIdentityMailFromDomainQueryParams withVersion(GetSetIdentityMailFromDomainVersionEnum version) {
        this.version = version;
        return this;
    }
}