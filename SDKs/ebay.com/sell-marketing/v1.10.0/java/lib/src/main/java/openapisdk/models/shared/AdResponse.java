package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdResponse
 * This type defines the fields returned in an ad response.
**/
public class AdResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adId")
    public String adId;
    public AdResponse withAdId(String adId) {
        this.adId = adId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public AdResponse withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public AdResponse withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listingId")
    public String listingId;
    public AdResponse withListingId(String listingId) {
        this.listingId = listingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public Integer statusCode;
    public AdResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}