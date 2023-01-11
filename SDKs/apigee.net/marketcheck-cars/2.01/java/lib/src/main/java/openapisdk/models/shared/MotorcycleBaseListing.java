package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MotorcycleBaseListing
 * Base motorcycle listing
**/
public class MotorcycleBaseListing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build")
    public MotorcycleBuild build;
    public MotorcycleBaseListing withBuild(MotorcycleBuild build) {
        this.build = build;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public MotorcycleBaseListing withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealer")
    public NestDealer dealer;
    public MotorcycleBaseListing withDealer(NestDealer dealer) {
        this.dealer = dealer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dist")
    public Double dist;
    public MotorcycleBaseListing withDist(Double dist) {
        this.dist = dist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dp_url")
    public String dpUrl;
    public MotorcycleBaseListing withDpUrl(String dpUrl) {
        this.dpUrl = dpUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at")
    public Long firstSeenAt;
    public MotorcycleBaseListing withFirstSeenAt(Long firstSeenAt) {
        this.firstSeenAt = firstSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at_date")
    public String firstSeenAtDate;
    public MotorcycleBaseListing withFirstSeenAtDate(String firstSeenAtDate) {
        this.firstSeenAtDate = firstSeenAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heading")
    public String heading;
    public MotorcycleBaseListing withHeading(String heading) {
        this.heading = heading;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MotorcycleBaseListing withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventory_type")
    public String inventoryType;
    public MotorcycleBaseListing withInventoryType(String inventoryType) {
        this.inventoryType = inventoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_seen_at")
    public Long lastSeenAt;
    public MotorcycleBaseListing withLastSeenAt(Long lastSeenAt) {
        this.lastSeenAt = lastSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_seen_at_date")
    public String lastSeenAtDate;
    public MotorcycleBaseListing withLastSeenAtDate(String lastSeenAtDate) {
        this.lastSeenAtDate = lastSeenAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public ListingNestMedia media;
    public MotorcycleBaseListing withMedia(ListingNestMedia media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miles")
    public Long miles;
    public MotorcycleBaseListing withMiles(Long miles) {
        this.miles = miles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msrp")
    public Long msrp;
    public MotorcycleBaseListing withMsrp(Long msrp) {
        this.msrp = msrp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Long price;
    public MotorcycleBaseListing withPrice(Long price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scraped_at")
    public Double scrapedAt;
    public MotorcycleBaseListing withScrapedAt(Double scrapedAt) {
        this.scrapedAt = scrapedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scraped_at_date")
    public String scrapedAtDate;
    public MotorcycleBaseListing withScrapedAtDate(String scrapedAtDate) {
        this.scrapedAtDate = scrapedAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller_type")
    public String sellerType;
    public MotorcycleBaseListing withSellerType(String sellerType) {
        this.sellerType = sellerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public MotorcycleBaseListing withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stock_no")
    public String stockNo;
    public MotorcycleBaseListing withStockNo(String stockNo) {
        this.stockNo = stockNo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vin")
    public String vin;
    public MotorcycleBaseListing withVin(String vin) {
        this.vin = vin;
        return this;
    }
}