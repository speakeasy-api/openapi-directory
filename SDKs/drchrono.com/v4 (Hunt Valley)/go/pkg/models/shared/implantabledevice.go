package shared

type ImplantableDeviceStatusEnum string

const (
	ImplantableDeviceStatusEnumActive   ImplantableDeviceStatusEnum = "active"
	ImplantableDeviceStatusEnumInactive ImplantableDeviceStatusEnum = "inactive"
)

type ImplantableDevice struct {
	Archived          *bool                        `json:"archived,omitempty"`
	BrandName         *string                      `json:"brand_name,omitempty"`
	CompanyName       *string                      `json:"company_name,omitempty"`
	CreatedAt         *string                      `json:"created_at,omitempty"`
	ExpirationDate    *string                      `json:"expiration_date,omitempty"`
	GmdnPtName        *string                      `json:"gmdn_pt_name,omitempty"`
	ID                *int64                       `json:"id,omitempty"`
	ManufacturingDate *string                      `json:"manufacturing_date,omitempty"`
	Patient           *string                      `json:"patient,omitempty"`
	Procedure         *string                      `json:"procedure,omitempty"`
	SerialNumber      *string                      `json:"serial_number,omitempty"`
	Status            *ImplantableDeviceStatusEnum `json:"status,omitempty"`
	Udi               *string                      `json:"udi,omitempty"`
	UpdatedAt         *string                      `json:"updated_at,omitempty"`
	VersionOrModel    *string                      `json:"version_or_model,omitempty"`
}
