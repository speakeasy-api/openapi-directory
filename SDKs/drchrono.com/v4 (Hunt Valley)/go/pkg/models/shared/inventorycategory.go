package shared

type InventoryCategoryCategoryTypeEnum string

const (
	InventoryCategoryCategoryTypeEnumVaccine InventoryCategoryCategoryTypeEnum = "vaccine"
	InventoryCategoryCategoryTypeEnumProduct InventoryCategoryCategoryTypeEnum = "product"
	InventoryCategoryCategoryTypeEnumService InventoryCategoryCategoryTypeEnum = "service"
)

type InventoryCategory struct {
	Archived     *bool                              `json:"archived,omitempty"`
	CategoryType *InventoryCategoryCategoryTypeEnum `json:"category_type,omitempty"`
	CreatedAt    *string                            `json:"created_at,omitempty"`
	Doctor       *string                            `json:"doctor,omitempty"`
	ID           *int64                             `json:"id,omitempty"`
	Name         *string                            `json:"name,omitempty"`
	UpdatedAt    *string                            `json:"updated_at,omitempty"`
}
