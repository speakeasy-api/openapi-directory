package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GeneralSettings
 * Represents the general settings of your channel catalog
**/
public class GeneralSettings {
    @JsonProperty("acceptToPublishInfo")
    public Boolean acceptToPublishInfo;
    public GeneralSettings withAcceptToPublishInfo(Boolean acceptToPublishInfo) {
        this.acceptToPublishInfo = acceptToPublishInfo;
        return this;
    }
    @JsonProperty("activeBeezUPTracking")
    public Boolean activeBeezUPTracking;
    public GeneralSettings withActiveBeezUpTracking(Boolean activeBeezUPTracking) {
        this.activeBeezUPTracking = activeBeezUPTracking;
        return this;
    }
    @JsonProperty("doNotExportOutOfStockProducts")
    public Boolean doNotExportOutOfStockProducts;
    public GeneralSettings withDoNotExportOutOfStockProducts(Boolean doNotExportOutOfStockProducts) {
        this.doNotExportOutOfStockProducts = doNotExportOutOfStockProducts;
        return this;
    }
}