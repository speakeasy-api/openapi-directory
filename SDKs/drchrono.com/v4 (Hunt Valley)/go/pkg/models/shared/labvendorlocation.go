package shared

type LabVendorLocation struct {
	FacilityCode string  `json:"facility_code"`
	ID           *int64  `json:"id,omitempty"`
	Name         string  `json:"name"`
	VendorName   *string `json:"vendor_name,omitempty"`
}
