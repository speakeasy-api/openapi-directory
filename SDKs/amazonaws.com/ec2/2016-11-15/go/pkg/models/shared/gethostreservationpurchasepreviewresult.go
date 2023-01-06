package shared

type GetHostReservationPurchasePreviewResult struct {
	CurrencyCode      map[string]interface{}
	Purchase          map[string]interface{}
	TotalHourlyPrice  map[string]interface{}
	TotalUpfrontPrice map[string]interface{}
}
