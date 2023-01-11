package openapisdk.models.shared;



/**
 * OrderableDbInstanceOptionsMessage
 *  Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action. 
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