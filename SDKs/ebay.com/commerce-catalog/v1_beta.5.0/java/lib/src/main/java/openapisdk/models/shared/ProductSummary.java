package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProductSummary
 * This type contains a summary of a specified product. The product summary includes information about the product's identifiers, product images, aspects, and the getProduct URL for retrieving the product details.
**/
public class ProductSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalImages")
    public Image[] additionalImages;
    public ProductSummary withAdditionalImages(Image[] additionalImages) {
        this.additionalImages = additionalImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspects")
    public Aspect[] aspects;
    public ProductSummary withAspects(Aspect[] aspects) {
        this.aspects = aspects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public ProductSummary withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ean")
    public String[] ean;
    public ProductSummary withEan(String[] ean) {
        this.ean = ean;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("epid")
    public String epid;
    public ProductSummary withEpid(String epid) {
        this.epid = epid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gtin")
    public String[] gtin;
    public ProductSummary withGtin(String[] gtin) {
        this.gtin = gtin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public ProductSummary withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isbn")
    public String[] isbn;
    public ProductSummary withIsbn(String[] isbn) {
        this.isbn = isbn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpn")
    public String[] mpn;
    public ProductSummary withMpn(String[] mpn) {
        this.mpn = mpn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productHref")
    public String productHref;
    public ProductSummary withProductHref(String productHref) {
        this.productHref = productHref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productWebUrl")
    public String productWebUrl;
    public ProductSummary withProductWebUrl(String productWebUrl) {
        this.productWebUrl = productWebUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ProductSummary withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upc")
    public String[] upc;
    public ProductSummary withUpc(String[] upc) {
        this.upc = upc;
        return this;
    }
}