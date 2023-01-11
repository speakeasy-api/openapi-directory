package openapisdk.models.shared;



/**
 * OrderableDbInstanceOptionsMessage
 * Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.
**/
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