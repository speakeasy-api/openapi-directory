package operations

type GetVersionIncidentsFormatIncidentTypeEnum string

const (
	GETVersionIncidentsFormatIncidentTypeEnumCrash               GetVersionIncidentsFormatIncidentTypeEnum = "crash"
	GETVersionIncidentsFormatIncidentTypeEnumHazard              GetVersionIncidentsFormatIncidentTypeEnum = "hazard"
	GETVersionIncidentsFormatIncidentTypeEnumTheft               GetVersionIncidentsFormatIncidentTypeEnum = "theft"
	GETVersionIncidentsFormatIncidentTypeEnumUnconfirmed         GetVersionIncidentsFormatIncidentTypeEnum = "unconfirmed"
	GETVersionIncidentsFormatIncidentTypeEnumInfrastructureIssue GetVersionIncidentsFormatIncidentTypeEnum = "infrastructure_issue"
	GETVersionIncidentsFormatIncidentTypeEnumChopShop            GetVersionIncidentsFormatIncidentTypeEnum = "chop_shop"
)

type GetVersionIncidentsFormatQueryParams struct {
	IncidentType    *GetVersionIncidentsFormatIncidentTypeEnum `queryParam:"style=form,explode=true,name=incident_type"`
	OccurredAfter   *int32                                     `queryParam:"style=form,explode=true,name=occurred_after"`
	OccurredBefore  *int32                                     `queryParam:"style=form,explode=true,name=occurred_before"`
	Page            *int32                                     `queryParam:"style=form,explode=true,name=page"`
	PerPage         *int32                                     `queryParam:"style=form,explode=true,name=per_page"`
	Proximity       *string                                    `queryParam:"style=form,explode=true,name=proximity"`
	ProximitySquare *int32                                     `queryParam:"style=form,explode=true,name=proximity_square"`
	Query           *string                                    `queryParam:"style=form,explode=true,name=query"`
}

type GetVersionIncidentsFormatRequest struct {
	QueryParams GetVersionIncidentsFormatQueryParams
}

type GetVersionIncidentsFormatResponse struct {
	ContentType string
	StatusCode  int64
}
