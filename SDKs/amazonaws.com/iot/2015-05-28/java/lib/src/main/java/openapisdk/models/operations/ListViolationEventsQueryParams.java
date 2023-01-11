package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListViolationEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=behaviorCriteriaType")
    public ListViolationEventsBehaviorCriteriaTypeEnum behaviorCriteriaType;
    public ListViolationEventsQueryParams withBehaviorCriteriaType(ListViolationEventsBehaviorCriteriaTypeEnum behaviorCriteriaType) {
        this.behaviorCriteriaType = behaviorCriteriaType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endTime")
    public OffsetDateTime endTime;
    public ListViolationEventsQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=listSuppressedAlerts")
    public Boolean listSuppressedAlerts;
    public ListViolationEventsQueryParams withListSuppressedAlerts(Boolean listSuppressedAlerts) {
        this.listSuppressedAlerts = listSuppressedAlerts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListViolationEventsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListViolationEventsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=securityProfileName")
    public String securityProfileName;
    public ListViolationEventsQueryParams withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startTime")
    public OffsetDateTime startTime;
    public ListViolationEventsQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=thingName")
    public String thingName;
    public ListViolationEventsQueryParams withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}