package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVersionIncidentsFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=incident_type")
    public GetVersionIncidentsFormatIncidentTypeEnum incidentType;
    public GetVersionIncidentsFormatQueryParams withIncidentType(GetVersionIncidentsFormatIncidentTypeEnum incidentType) {
        this.incidentType = incidentType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurred_after")
    public Integer occurredAfter;
    public GetVersionIncidentsFormatQueryParams withOccurredAfter(Integer occurredAfter) {
        this.occurredAfter = occurredAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=occurred_before")
    public Integer occurredBefore;
    public GetVersionIncidentsFormatQueryParams withOccurredBefore(Integer occurredBefore) {
        this.occurredBefore = occurredBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetVersionIncidentsFormatQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetVersionIncidentsFormatQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=proximity")
    public String proximity;
    public GetVersionIncidentsFormatQueryParams withProximity(String proximity) {
        this.proximity = proximity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=proximity_square")
    public Integer proximitySquare;
    public GetVersionIncidentsFormatQueryParams withProximitySquare(Integer proximitySquare) {
        this.proximitySquare = proximitySquare;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=query")
    public String query;
    public GetVersionIncidentsFormatQueryParams withQuery(String query) {
        this.query = query;
        return this;
    }
}