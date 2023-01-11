package openapisdk.models.shared;



/**
 * CookiePreference
 * A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.
**/
public class CookiePreference {
    public ItemSelectionEnum forward;
    public CookiePreference withForward(ItemSelectionEnum forward) {
        this.forward = forward;
        return this;
    }
    public CookieNames whitelistedNames;
    public CookiePreference withWhitelistedNames(CookieNames whitelistedNames) {
        this.whitelistedNames = whitelistedNames;
        return this;
    }
}