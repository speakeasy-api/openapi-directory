package shared

type GetImportationReportResponseError struct {
	BeezUPColumnName *string `json:"beezUPColumnName,omitempty"`
	ErrorCode        string  `json:"errorCode"`
	ProductCount     int64   `json:"productCount"`
	UserColumName    string  `json:"userColumName"`
}
