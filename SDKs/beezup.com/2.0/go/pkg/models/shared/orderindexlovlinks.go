package shared

// OrderIndexLovLinks
// Gives you all the LOV to get the translations realated to operation name, codes, property names and statuses.
type OrderIndexLovLinks struct {
	OrderChangeBusinessOperationType BeezUpCommonLovLink3 `json:"orderChangeBusinessOperationType"`
	OrderProperty                    BeezUpCommonLovLink3 `json:"orderProperty"`
	OrderPropertyPosted              BeezUpCommonLovLink3 `json:"orderPropertyPosted"`
	OrderState                       BeezUpCommonLovLink3 `json:"orderState"`
}
