package shared

// GetImportationProductsReportRequest
// Get Importation Products Report Request
type GetImportationProductsReportRequest struct {
	Ean        *string                                        `json:"ean,omitempty"`
	ErrorCodes []GetImportationProductsReportRequestErrorCode `json:"errorCodes,omitempty"`
	Mpn        *string                                        `json:"mpn,omitempty"`
	PageNumber int32                                          `json:"pageNumber"`
	PageSize   int32                                          `json:"pageSize"`
	Sku        *string                                        `json:"sku,omitempty"`
	Title      *string                                        `json:"title,omitempty"`
}
