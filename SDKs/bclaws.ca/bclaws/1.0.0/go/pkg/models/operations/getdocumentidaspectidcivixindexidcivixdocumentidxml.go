package operations

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum string

const (
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnumComplete GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum = "complete"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnumCorpreg  GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum = "corpreg"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnumBcgaz1   GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum = "bcgaz1"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnumBcgaz2   GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum = "bcgaz2"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnumOic      GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum = "oic"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnumPsl      GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum = "psl"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnumEcb      GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum = "ecb"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnumHscr     GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum = "hscr"
	GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnumArchOic  GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum = "arch_oic"
)

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLPathParams struct {
	AspectID        GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnum `pathParam:"style=simple,explode=false,name=aspectId"`
	CivixDocumentID string                                                          `pathParam:"style=simple,explode=false,name=civixDocumentId"`
	CivixIndexID    string                                                          `pathParam:"style=simple,explode=false,name=civixIndexId"`
}

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLRequest struct {
	PathParams GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLPathParams
}

type GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLResponse struct {
	ContentType string
	StatusCode  int64
}
