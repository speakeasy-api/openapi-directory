package operations

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnum string

const (
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnumComplete GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnum = "complete"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnumCorpreg  GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnum = "corpreg"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnumBcgaz1   GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnum = "bcgaz1"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnumBcgaz2   GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnum = "bcgaz2"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnumOic      GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnum = "oic"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnumPsl      GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnum = "psl"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnumEcb      GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnum = "ecb"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnumHscr     GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnum = "hscr"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnumArchOic  GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnum = "arch_oic"
)

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringPathParams struct {
	AspectID        GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnum `pathParam:"style=simple,explode=false,name=aspectId"`
	CivixDocumentID string                                                                            `pathParam:"style=simple,explode=false,name=civixDocumentId"`
	CivixIndexID    string                                                                            `pathParam:"style=simple,explode=false,name=civixIndexId"`
	SearchString    string                                                                            `pathParam:"style=simple,explode=false,name=searchString"`
}

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringRequest struct {
	PathParams GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringPathParams
}

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringResponse struct {
	ContentType string
	StatusCode  int64
}
