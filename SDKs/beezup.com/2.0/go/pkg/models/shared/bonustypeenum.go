package shared

type BonusTypeEnum string

const (
	BonusTypeEnumOnlinePaymentMethodBonus    BonusTypeEnum = "OnlinePaymentMethodBonus"
	BonusTypeEnumPreviousInvoiceProrataBonus BonusTypeEnum = "PreviousInvoiceProrataBonus"
	BonusTypeEnumPreviousContractBonus       BonusTypeEnum = "PreviousContractBonus"
)
