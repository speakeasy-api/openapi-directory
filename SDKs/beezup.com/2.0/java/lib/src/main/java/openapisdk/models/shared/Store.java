package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Store {
    @JsonProperty("countryIsoCodeAlpha3")
    public String countryIsoCodeAlpha3;
    public Store withCountryIsoCodeAlpha3(String countryIsoCodeAlpha3) {
        this.countryIsoCodeAlpha3 = countryIsoCodeAlpha3;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationUtcDate")
    public OffsetDateTime creationUtcDate;
    public Store withCreationUtcDate(OffsetDateTime creationUtcDate) {
        this.creationUtcDate = creationUtcDate;
        return this;
    }
    @JsonProperty("currencyCode")
    public String currencyCode;
    public Store withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("goVersion")
    public Integer goVersion;
    public Store withGoVersion(Integer goVersion) {
        this.goVersion = goVersion;
        return this;
    }
    @JsonProperty("links")
    public StoreLinks links;
    public Store withLinks(StoreLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Store withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("offerId")
    public Integer offerId;
    public Store withOfferId(Integer offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonProperty("offerName")
    public String offerName;
    public Store withOfferName(String offerName) {
        this.offerName = offerName;
        return this;
    }
    @JsonProperty("ownerUserId")
    public String ownerUserId;
    public Store withOwnerUserId(String ownerUserId) {
        this.ownerUserId = ownerUserId;
        return this;
    }
    @JsonProperty("sectors")
    public String[] sectors;
    public Store withSectors(String[] sectors) {
        this.sectors = sectors;
        return this;
    }
    @JsonProperty("shareCount")
    public Long shareCount;
    public Store withShareCount(Long shareCount) {
        this.shareCount = shareCount;
        return this;
    }
    @JsonProperty("status")
    public StoreStatusEnum status;
    public Store withStatus(StoreStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("storeId")
    public String storeId;
    public Store withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Store withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("userRole")
    public StoreUserRoleEnum userRole;
    public Store withUserRole(StoreUserRoleEnum userRole) {
        this.userRole = userRole;
        return this;
    }
}