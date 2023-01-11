package openapisdk.models.shared;



/**
 * OriginShield
 * <p>CloudFront Origin Shield.</p> <p>Using Origin Shield can help reduce the load on your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
**/
public class OriginShield {
    public Boolean enabled;
    public OriginShield withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public String originShieldRegion;
    public OriginShield withOriginShieldRegion(String originShieldRegion) {
        this.originShieldRegion = originShieldRegion;
        return this;
    }
}