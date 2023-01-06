package operations

type GetVersionLocationsFormatIncidentTypeEnum string

const (
	GETVersionLocationsFormatIncidentTypeEnumCrash               GetVersionLocationsFormatIncidentTypeEnum = "crash"
	GETVersionLocationsFormatIncidentTypeEnumHazard              GetVersionLocationsFormatIncidentTypeEnum = "hazard"
	GETVersionLocationsFormatIncidentTypeEnumTheft               GetVersionLocationsFormatIncidentTypeEnum = "theft"
	GETVersionLocationsFormatIncidentTypeEnumUnconfirmed         GetVersionLocationsFormatIncidentTypeEnum = "unconfirmed"
	GETVersionLocationsFormatIncidentTypeEnumInfrastructureIssue GetVersionLocationsFormatIncidentTypeEnum = "infrastructure_issue"
	GETVersionLocationsFormatIncidentTypeEnumChopShop            GetVersionLocationsFormatIncidentTypeEnum = "chop_shop"
)

type GetVersionLocationsFormatQueryParams struct {
	All             *bool                                      `queryParam:"style=form,explode=true,name=all"`
	IncidentType    *GetVersionLocationsFormatIncidentTypeEnum `queryParam:"style=form,explode=true,name=incident_type"`
	Limit           *int32                                     `queryParam:"style=form,explode=true,name=limit"`
	OccurredAfter   *int32                                     `queryParam:"style=form,explode=true,name=occurred_after"`
	OccurredBefore  *int32                                     `queryParam:"style=form,explode=true,name=occurred_before"`
	Proximity       *string                                    `queryParam:"style=form,explode=true,name=proximity"`
	ProximitySquare *int32                                     `queryParam:"style=form,explode=true,name=proximity_square"`
	Query           *string                                    `queryParam:"style=form,explode=true,name=query"`
}

type GetVersionLocationsFormatRequest struct {
	QueryParams GetVersionLocationsFormatQueryParams
}

type GetVersionLocationsFormatResponse struct {
	ContentType string
	StatusCode  int64
}
