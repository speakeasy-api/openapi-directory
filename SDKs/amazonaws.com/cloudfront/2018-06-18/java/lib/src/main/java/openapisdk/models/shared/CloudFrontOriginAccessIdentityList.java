package openapisdk.models.shared;



/**
 * CloudFrontOriginAccessIdentityList
 * Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters.
**/
public class CloudFrontOriginAccessIdentityList {
    public Boolean isTruncated;
    public CloudFrontOriginAccessIdentityList withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public CloudFrontOriginAccessIdentitySummaryList[] items;
    public CloudFrontOriginAccessIdentityList withItems(CloudFrontOriginAccessIdentitySummaryList[] items) {
        this.items = items;
        return this;
    }
    public String marker;
    public CloudFrontOriginAccessIdentityList withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Long maxItems;
    public CloudFrontOriginAccessIdentityList withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    public String nextMarker;
    public CloudFrontOriginAccessIdentityList withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    public Long quantity;
    public CloudFrontOriginAccessIdentityList withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
}