package openapisdk.models.shared;



/**
 * OrderableClusterOptionsMessage
 * Contains the output from the <a>DescribeOrderableClusterOptions</a> action. 
**/
public class OrderableClusterOptionsMessage {
    public String marker;
    public OrderableClusterOptionsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public OrderableClusterOptionsList[] orderableClusterOptions;
    public OrderableClusterOptionsMessage withOrderableClusterOptions(OrderableClusterOptionsList[] orderableClusterOptions) {
        this.orderableClusterOptions = orderableClusterOptions;
        return this;
    }
}