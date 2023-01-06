package shared

type PromotionalCodeValidityEnum string

const (
	PromotionalCodeValidityEnumNone              PromotionalCodeValidityEnum = "None"
	PromotionalCodeValidityEnumValid             PromotionalCodeValidityEnum = "Valid"
	PromotionalCodeValidityEnumInvalid           PromotionalCodeValidityEnum = "Invalid"
	PromotionalCodeValidityEnumExpiredOrInactive PromotionalCodeValidityEnum = "ExpiredOrInactive"
)
