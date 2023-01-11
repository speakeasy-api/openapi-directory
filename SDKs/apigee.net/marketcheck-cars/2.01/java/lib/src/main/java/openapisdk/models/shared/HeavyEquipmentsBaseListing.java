package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HeavyEquipmentsBaseListing
 * Base heavy equipment listing
**/
public class HeavyEquipmentsBaseListing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build")
    public HeavyEquipmentsBuild build;
    public HeavyEquipmentsBaseListing withBuild(HeavyEquipmentsBuild build) {
        this.build = build;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealer")
    public NestDealer dealer;
    public HeavyEquipmentsBaseListing withDealer(NestDealer dealer) {
        this.dealer = dealer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dist")
    public Double dist;
    public HeavyEquipmentsBaseListing withDist(Double dist) {
        this.dist = dist;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dp_url")
    public String dpUrl;
    public HeavyEquipmentsBaseListing withDpUrl(String dpUrl) {
        this.dpUrl = dpUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exterior_color")
    public String exteriorColor;
    public HeavyEquipmentsBaseListing withExteriorColor(String exteriorColor) {
        this.exteriorColor = exteriorColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at")
    public Long firstSeenAt;
    public HeavyEquipmentsBaseListing withFirstSeenAt(Long firstSeenAt) {
        this.firstSeenAt = firstSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_seen_at_date")
    public String firstSeenAtDate;
    public HeavyEquipmentsBaseListing withFirstSeenAtDate(String firstSeenAtDate) {
        this.firstSeenAtDate = firstSeenAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heading")
    public String heading;
    public HeavyEquipmentsBaseListing withHeading(String heading) {
        this.heading = heading;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public HeavyEquipmentsBaseListing withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interior_color")
    public String interiorColor;
    public HeavyEquipmentsBaseListing withInteriorColor(String interiorColor) {
        this.interiorColor = interiorColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventory_type")
    public String inventoryType;
    public HeavyEquipmentsBaseListing withInventoryType(String inventoryType) {
        this.inventoryType = inventoryType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_seen_at")
    public Long lastSeenAt;
    public HeavyEquipmentsBaseListing withLastSeenAt(Long lastSeenAt) {
        this.lastSeenAt = lastSeenAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_seen_at_date")
    public String lastSeenAtDate;
    public HeavyEquipmentsBaseListing withLastSeenAtDate(String lastSeenAtDate) {
        this.lastSeenAtDate = lastSeenAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public ListingNestMedia media;
    public HeavyEquipmentsBaseListing withMedia(ListingNestMedia media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miles")
    public Long miles;
    public HeavyEquipmentsBaseListing withMiles(Long miles) {
        this.miles = miles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("msrp")
    public Long msrp;
    public HeavyEquipmentsBaseListing withMsrp(Long msrp) {
        this.msrp = msrp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Long price;
    public HeavyEquipmentsBaseListing withPrice(Long price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scraped_at")
    public Double scrapedAt;
    public HeavyEquipmentsBaseListing withScrapedAt(Double scrapedAt) {
        this.scrapedAt = scrapedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scraped_at_date")
    public String scrapedAtDate;
    public HeavyEquipmentsBaseListing withScrapedAtDate(String scrapedAtDate) {
        this.scrapedAtDate = scrapedAtDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller_type")
    public String sellerType;
    public HeavyEquipmentsBaseListing withSellerType(String sellerType) {
        this.sellerType = sellerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public HeavyEquipmentsBaseListing withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stock_no")
    public String stockNo;
    public HeavyEquipmentsBaseListing withStockNo(String stockNo) {
        this.stockNo = stockNo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vin")
    public String vin;
    public HeavyEquipmentsBaseListing withVin(String vin) {
        this.vin = vin;
        return this;
    }
}