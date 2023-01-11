package openapisdk.models.shared;



/**
 * GeoRestriction
 * A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases. 
**/
public class GeoRestriction {
    public java.util.Map<String, Object>[] items;
    public GeoRestriction withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Long quantity;
    public GeoRestriction withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    public GeoRestrictionTypeEnum restrictionType;
    public GeoRestriction withRestrictionType(GeoRestrictionTypeEnum restrictionType) {
        this.restrictionType = restrictionType;
        return this;
    }
}