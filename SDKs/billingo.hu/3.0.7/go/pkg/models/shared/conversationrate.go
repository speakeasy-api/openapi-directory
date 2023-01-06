package shared

type ConversationRate struct {
	ConversationRate *float32      `json:"conversation_rate,omitempty"`
	FromCurrency     *CurrencyEnum `json:"from_currency,omitempty"`
	ToCurrency       *CurrencyEnum `json:"to_currency,omitempty"`
}
