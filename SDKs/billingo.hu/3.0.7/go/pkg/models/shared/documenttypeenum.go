package shared

type DocumentTypeEnum string

const (
	DocumentTypeEnumAdvance      DocumentTypeEnum = "advance"
	DocumentTypeEnumCanceled     DocumentTypeEnum = "canceled"
	DocumentTypeEnumCancellation DocumentTypeEnum = "cancellation"
	DocumentTypeEnumDraft        DocumentTypeEnum = "draft"
	DocumentTypeEnumInvoice      DocumentTypeEnum = "invoice"
	DocumentTypeEnumProforma     DocumentTypeEnum = "proforma"
)
