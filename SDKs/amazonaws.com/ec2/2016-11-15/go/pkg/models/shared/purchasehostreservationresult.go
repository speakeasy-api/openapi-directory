package shared

type PurchaseHostReservationResult struct {
	ClientToken       map[string]interface{}
	CurrencyCode      map[string]interface{}
	Purchase          map[string]interface{}
	TotalHourlyPrice  map[string]interface{}
	TotalUpfrontPrice map[string]interface{}
}
