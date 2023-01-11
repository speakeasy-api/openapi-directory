package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Product
 * This type contains the full details of a specified product, including information about the product's identifiers, product images, aspects, and categories.
**/
public class Product {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalImages")
    public Image[] additionalImages;
    public Product withAdditionalImages(Image[] additionalImages) {
        this.additionalImages = additionalImages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspects")
    public Aspect[] aspects;
    public Product withAspects(Aspect[] aspects) {
        this.aspects = aspects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public Product withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Product withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ean")
    public String[] ean;
    public Product withEan(String[] ean) {
        this.ean = ean;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("epid")
    public String epid;
    public Product withEpid(String epid) {
        this.epid = epid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gtin")
    public String[] gtin;
    public Product withGtin(String[] gtin) {
        this.gtin = gtin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public Image image;
    public Product withImage(Image image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isbn")
    public String[] isbn;
    public Product withIsbn(String[] isbn) {
        this.isbn = isbn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mpn")
    public String[] mpn;
    public Product withMpn(String[] mpn) {
        this.mpn = mpn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherApplicableCategoryIds")
    public String[] otherApplicableCategoryIds;
    public Product withOtherApplicableCategoryIds(String[] otherApplicableCategoryIds) {
        this.otherApplicableCategoryIds = otherApplicableCategoryIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryCategoryId")
    public String primaryCategoryId;
    public Product withPrimaryCategoryId(String primaryCategoryId) {
        this.primaryCategoryId = primaryCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productWebUrl")
    public String productWebUrl;
    public Product withProductWebUrl(String productWebUrl) {
        this.productWebUrl = productWebUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Product withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upc")
    public String[] upc;
    public Product withUpc(String[] upc) {
        this.upc = upc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Product withVersion(String version) {
        this.version = version;
        return this;
    }
}