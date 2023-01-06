package shared

type BonusInfo struct {
	Amount    float64       `json:"amount"`
	BonusType BonusTypeEnum `json:"bonusType"`
}
