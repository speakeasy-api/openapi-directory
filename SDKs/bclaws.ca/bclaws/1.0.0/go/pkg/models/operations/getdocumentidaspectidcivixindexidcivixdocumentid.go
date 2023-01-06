package operations

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum string

const (
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnumComplete GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum = "complete"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnumCorpreg  GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum = "corpreg"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnumBcgaz1   GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum = "bcgaz1"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnumBcgaz2   GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum = "bcgaz2"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnumOic      GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum = "oic"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnumPsl      GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum = "psl"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnumEcb      GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum = "ecb"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnumHscr     GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum = "hscr"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnumArchOic  GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum = "arch_oic"
)

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDPathParams struct {
	AspectID        GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnum `pathParam:"style=simple,explode=false,name=aspectId"`
	CivixDocumentID string                                                       `pathParam:"style=simple,explode=false,name=civixDocumentId"`
	CivixIndexID    string                                                       `pathParam:"style=simple,explode=false,name=civixIndexId"`
}

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDRequest struct {
	PathParams GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDPathParams
}

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDResponse struct {
	ContentType string
	StatusCode  int64
}
