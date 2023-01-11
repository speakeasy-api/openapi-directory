package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVersionLocationsFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public GetVersionLocationsFormatQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=incident_type")
    public GetVersionLocationsFormatIncidentTypeEnum incidentType;
    public GetVersionLocationsFormatQueryParams withIncidentType(GetVersionLocationsFormatIncidentTypeEnum incidentType) {
        this.incidentType = incidentType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetVersionLocationsFormatQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurred_after")
    public Integer occurredAfter;
    public GetVersionLocationsFormatQueryParams withOccurredAfter(Integer occurredAfter) {
        this.occurredAfter = occurredAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurred_before")
    public Integer occurredBefore;
    public GetVersionLocationsFormatQueryParams withOccurredBefore(Integer occurredBefore) {
        this.occurredBefore = occurredBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=proximity")
    public String proximity;
    public GetVersionLocationsFormatQueryParams withProximity(String proximity) {
        this.proximity = proximity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=proximity_square")
    public Integer proximitySquare;
    public GetVersionLocationsFormatQueryParams withProximitySquare(Integer proximitySquare) {
        this.proximitySquare = proximitySquare;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetVersionLocationsFormatQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}