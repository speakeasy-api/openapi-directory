package openapisdk.models.shared;



public class OrderableDbInstanceOptionsMessage {
    public String marker;
    public OrderableDbInstanceOptionsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public OrderableDbInstanceOptionsList[] orderableDBInstanceOptions;
    public OrderableDbInstanceOptionsMessage withOrderableDbInstanceOptions(OrderableDbInstanceOptionsList[] orderableDBInstanceOptions) {
        this.orderableDBInstanceOptions = orderableDBInstanceOptions;
        return this;
    }
}