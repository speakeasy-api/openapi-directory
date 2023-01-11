package openapisdk.models.shared;



public class PurchaseHostReservationResult {
    public java.util.Map<String, Object> clientToken;
    public PurchaseHostReservationResult withClientToken(java.util.Map<String, Object> clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    public java.util.Map<String, Object> currencyCode;
    public PurchaseHostReservationResult withCurrencyCode(java.util.Map<String, Object> currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    public java.util.Map<String, Object> purchase;
    public PurchaseHostReservationResult withPurchase(java.util.Map<String, Object> purchase) {
        this.purchase = purchase;
        return this;
    }
    public java.util.Map<String, Object> totalHourlyPrice;
    public PurchaseHostReservationResult withTotalHourlyPrice(java.util.Map<String, Object> totalHourlyPrice) {
        this.totalHourlyPrice = totalHourlyPrice;
        return this;
    }
    public java.util.Map<String, Object> totalUpfrontPrice;
    public PurchaseHostReservationResult withTotalUpfrontPrice(java.util.Map<String, Object> totalUpfrontPrice) {
        this.totalUpfrontPrice = totalUpfrontPrice;
        return this;
    }
}