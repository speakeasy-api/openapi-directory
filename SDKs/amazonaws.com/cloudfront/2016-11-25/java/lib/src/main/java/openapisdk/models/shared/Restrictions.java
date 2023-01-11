package openapisdk.models.shared;



/**
 * Restrictions
 * A complex type that identifies ways in which you want to restrict distribution of your content.
**/
public class Restrictions {
    public GeoRestriction geoRestriction;
    public Restrictions withGeoRestriction(GeoRestriction geoRestriction) {
        this.geoRestriction = geoRestriction;
        return this;
    }
}