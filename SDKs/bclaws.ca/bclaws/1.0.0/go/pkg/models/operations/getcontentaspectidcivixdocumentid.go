package operations

type GetContentAspectIDCivixDocumentIDAspectIDEnum string

const (
	GetContentAspectIDCivixDocumentIDAspectIDEnumComplete GetContentAspectIDCivixDocumentIDAspectIDEnum = "complete"
	GetContentAspectIDCivixDocumentIDAspectIDEnumCorpreg  GetContentAspectIDCivixDocumentIDAspectIDEnum = "corpreg"
	GetContentAspectIDCivixDocumentIDAspectIDEnumBcgaz1   GetContentAspectIDCivixDocumentIDAspectIDEnum = "bcgaz1"
	GetContentAspectIDCivixDocumentIDAspectIDEnumBcgaz2   GetContentAspectIDCivixDocumentIDAspectIDEnum = "bcgaz2"
	GetContentAspectIDCivixDocumentIDAspectIDEnumOic      GetContentAspectIDCivixDocumentIDAspectIDEnum = "oic"
	GetContentAspectIDCivixDocumentIDAspectIDEnumPsl      GetContentAspectIDCivixDocumentIDAspectIDEnum = "psl"
	GetContentAspectIDCivixDocumentIDAspectIDEnumEcb      GetContentAspectIDCivixDocumentIDAspectIDEnum = "ecb"
	GetContentAspectIDCivixDocumentIDAspectIDEnumHscr     GetContentAspectIDCivixDocumentIDAspectIDEnum = "hscr"
	GetContentAspectIDCivixDocumentIDAspectIDEnumArchOic  GetContentAspectIDCivixDocumentIDAspectIDEnum = "arch_oic"
)

type GetContentAspectIDCivixDocumentIDPathParams struct {
	AspectID        GetContentAspectIDCivixDocumentIDAspectIDEnum `pathParam:"style=simple,explode=false,name=aspectId"`
	CivixDocumentID string                                        `pathParam:"style=simple,explode=false,name=civixDocumentId"`
}

type GetContentAspectIDCivixDocumentIDRequest struct {
	PathParams GetContentAspectIDCivixDocumentIDPathParams
}

type GetContentAspectIDCivixDocumentIDResponse struct {
	ContentType string
	StatusCode  int64
}
