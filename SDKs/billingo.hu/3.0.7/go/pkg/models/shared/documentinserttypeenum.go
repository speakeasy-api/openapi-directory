package shared

type DocumentInsertTypeEnum string

const (
	DocumentInsertTypeEnumAdvance  DocumentInsertTypeEnum = "advance"
	DocumentInsertTypeEnumDraft    DocumentInsertTypeEnum = "draft"
	DocumentInsertTypeEnumInvoice  DocumentInsertTypeEnum = "invoice"
	DocumentInsertTypeEnumProforma DocumentInsertTypeEnum = "proforma"
)
