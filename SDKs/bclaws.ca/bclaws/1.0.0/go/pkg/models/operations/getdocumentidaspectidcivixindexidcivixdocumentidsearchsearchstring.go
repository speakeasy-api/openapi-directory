package operations

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum string

const (
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnumComplete GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum = "complete"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnumCorpreg  GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum = "corpreg"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnumBcgaz1   GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum = "bcgaz1"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnumBcgaz2   GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum = "bcgaz2"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnumOic      GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum = "oic"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnumPsl      GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum = "psl"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnumEcb      GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum = "ecb"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnumHscr     GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum = "hscr"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnumArchOic  GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum = "arch_oic"
)

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringPathParams struct {
	AspectID        GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnum `pathParam:"style=simple,explode=false,name=aspectId"`
	CivixDocumentID string                                                                         `pathParam:"style=simple,explode=false,name=civixDocumentId"`
	CivixIndexID    string                                                                         `pathParam:"style=simple,explode=false,name=civixIndexId"`
	SearchString    string                                                                         `pathParam:"style=simple,explode=false,name=searchString"`
}

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringRequest struct {
	PathParams GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringPathParams
}

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringResponse struct {
	ContentType string
	StatusCode  int64
}
