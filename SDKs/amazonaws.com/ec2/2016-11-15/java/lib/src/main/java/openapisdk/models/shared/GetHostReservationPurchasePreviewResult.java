package openapisdk.models.shared;



public class GetHostReservationPurchasePreviewResult {
    public java.util.Map<String, Object> currencyCode;
    public GetHostReservationPurchasePreviewResult withCurrencyCode(java.util.Map<String, Object> currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    public java.util.Map<String, Object> purchase;
    public GetHostReservationPurchasePreviewResult withPurchase(java.util.Map<String, Object> purchase) {
        this.purchase = purchase;
        return this;
    }
    public java.util.Map<String, Object> totalHourlyPrice;
    public GetHostReservationPurchasePreviewResult withTotalHourlyPrice(java.util.Map<String, Object> totalHourlyPrice) {
        this.totalHourlyPrice = totalHourlyPrice;
        return this;
    }
    public java.util.Map<String, Object> totalUpfrontPrice;
    public GetHostReservationPurchasePreviewResult withTotalUpfrontPrice(java.util.Map<String, Object> totalUpfrontPrice) {
        this.totalUpfrontPrice = totalUpfrontPrice;
        return this;
    }
}