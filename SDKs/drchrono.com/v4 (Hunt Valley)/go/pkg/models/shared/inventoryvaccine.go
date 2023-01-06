package shared

type InventoryVaccineStatusEnum string

const (
	InventoryVaccineStatusEnumActive   InventoryVaccineStatusEnum = "active"
	InventoryVaccineStatusEnumInactive InventoryVaccineStatusEnum = "inactive"
	InventoryVaccineStatusEnumArchived InventoryVaccineStatusEnum = "archived"
	InventoryVaccineStatusEnumVoided   InventoryVaccineStatusEnum = "voided"
)

type InventoryVaccine struct {
	Category           *int64                      `json:"category,omitempty"`
	Cost               *float64                    `json:"cost,omitempty"`
	CreatedAt          *string                     `json:"created_at,omitempty"`
	CurrentQuantity    *int64                      `json:"current_quantity,omitempty"`
	CvxCode            *string                     `json:"cvx_code,omitempty"`
	Doctor             int64                       `json:"doctor"`
	Expiry             *string                     `json:"expiry,omitempty"`
	ID                 *int64                      `json:"id,omitempty"`
	LotNumber          *string                     `json:"lot_number,omitempty"`
	Manufacturer       *string                     `json:"manufacturer,omitempty"`
	ManufacturerCode   string                      `json:"manufacturer_code"`
	Name               string                      `json:"name"`
	Note               *string                     `json:"note,omitempty"`
	OriginalQuantity   *int64                      `json:"original_quantity,omitempty"`
	Price              *float64                    `json:"price,omitempty"`
	PriceWithTax       *float64                    `json:"price_with_tax,omitempty"`
	SalesTaxApplicable *bool                       `json:"sales_tax_applicable,omitempty"`
	Status             *InventoryVaccineStatusEnum `json:"status,omitempty"`
	UpdatedAt          *string                     `json:"updated_at,omitempty"`
	VaccinationType    *string                     `json:"vaccination_type,omitempty"`
}
