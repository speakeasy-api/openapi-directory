package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVersionLocationsMarkersFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=all")
    public Boolean all;
    public GetVersionLocationsMarkersFormatQueryParams withAll(Boolean all) {
        this.all = all;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=incident_type")
    public GetVersionLocationsMarkersFormatIncidentTypeEnum incidentType;
    public GetVersionLocationsMarkersFormatQueryParams withIncidentType(GetVersionLocationsMarkersFormatIncidentTypeEnum incidentType) {
        this.incidentType = incidentType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetVersionLocationsMarkersFormatQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurred_after")
    public Integer occurredAfter;
    public GetVersionLocationsMarkersFormatQueryParams withOccurredAfter(Integer occurredAfter) {
        this.occurredAfter = occurredAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurred_before")
    public Integer occurredBefore;
    public GetVersionLocationsMarkersFormatQueryParams withOccurredBefore(Integer occurredBefore) {
        this.occurredBefore = occurredBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=proximity")
    public String proximity;
    public GetVersionLocationsMarkersFormatQueryParams withProximity(String proximity) {
        this.proximity = proximity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=proximity_square")
    public Integer proximitySquare;
    public GetVersionLocationsMarkersFormatQueryParams withProximitySquare(Integer proximitySquare) {
        this.proximitySquare = proximitySquare;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetVersionLocationsMarkersFormatQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}