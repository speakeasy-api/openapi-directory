package shared

type PaymentMethodEnum string

const (
	PaymentMethodEnumAruhitel       PaymentMethodEnum = "aruhitel"
	PaymentMethodEnumBankcard       PaymentMethodEnum = "bankcard"
	PaymentMethodEnumBarion         PaymentMethodEnum = "barion"
	PaymentMethodEnumBarter         PaymentMethodEnum = "barter"
	PaymentMethodEnumCash           PaymentMethodEnum = "cash"
	PaymentMethodEnumCashOnDelivery PaymentMethodEnum = "cash_on_delivery"
	PaymentMethodEnumCoupon         PaymentMethodEnum = "coupon"
	PaymentMethodEnumEloreUtalas    PaymentMethodEnum = "elore_utalas"
	PaymentMethodEnumEpKartya       PaymentMethodEnum = "ep_kartya"
	PaymentMethodEnumKompenzacio    PaymentMethodEnum = "kompenzacio"
	PaymentMethodEnumLevonas        PaymentMethodEnum = "levonas"
	PaymentMethodEnumOnlineBankcard PaymentMethodEnum = "online_bankcard"
	PaymentMethodEnumPayoneer       PaymentMethodEnum = "payoneer"
	PaymentMethodEnumPaypal         PaymentMethodEnum = "paypal"
	PaymentMethodEnumPaypalUtolag   PaymentMethodEnum = "paypal_utolag"
	PaymentMethodEnumPayu           PaymentMethodEnum = "payu"
	PaymentMethodEnumPickPackPont   PaymentMethodEnum = "pick_pack_pont"
	PaymentMethodEnumPostaiCsekk    PaymentMethodEnum = "postai_csekk"
	PaymentMethodEnumPostautalvany  PaymentMethodEnum = "postautalvany"
	PaymentMethodEnumSkrill         PaymentMethodEnum = "skrill"
	PaymentMethodEnumSzepCard       PaymentMethodEnum = "szep_card"
	PaymentMethodEnumTransferwise   PaymentMethodEnum = "transferwise"
	PaymentMethodEnumUpwork         PaymentMethodEnum = "upwork"
	PaymentMethodEnumUtalvany       PaymentMethodEnum = "utalvany"
	PaymentMethodEnumValto          PaymentMethodEnum = "valto"
	PaymentMethodEnumWireTransfer   PaymentMethodEnum = "wire_transfer"
)
