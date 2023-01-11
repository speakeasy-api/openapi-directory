package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListActiveViolationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=behaviorCriteriaType")
    public ListActiveViolationsBehaviorCriteriaTypeEnum behaviorCriteriaType;
    public ListActiveViolationsQueryParams withBehaviorCriteriaType(ListActiveViolationsBehaviorCriteriaTypeEnum behaviorCriteriaType) {
        this.behaviorCriteriaType = behaviorCriteriaType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=listSuppressedAlerts")
    public Boolean listSuppressedAlerts;
    public ListActiveViolationsQueryParams withListSuppressedAlerts(Boolean listSuppressedAlerts) {
        this.listSuppressedAlerts = listSuppressedAlerts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListActiveViolationsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListActiveViolationsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=securityProfileName")
    public String securityProfileName;
    public ListActiveViolationsQueryParams withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=thingName")
    public String thingName;
    public ListActiveViolationsQueryParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}