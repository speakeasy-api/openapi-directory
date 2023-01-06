package shared

type LabOrderDocumentTypeEnum string

const (
	LabOrderDocumentTypeEnumReq LabOrderDocumentTypeEnum = "REQ"
	LabOrderDocumentTypeEnumAbn LabOrderDocumentTypeEnum = "ABN"
	LabOrderDocumentTypeEnumRA  LabOrderDocumentTypeEnum = "R-A"
	LabOrderDocumentTypeEnumRes LabOrderDocumentTypeEnum = "RES"
)

type LabOrderDocument struct {
	Document  string                   `json:"document"`
	ID        *int64                   `json:"id,omitempty"`
	LabOrder  int64                    `json:"lab_order"`
	Timestamp *string                  `json:"timestamp,omitempty"`
	Type      LabOrderDocumentTypeEnum `json:"type"`
}
