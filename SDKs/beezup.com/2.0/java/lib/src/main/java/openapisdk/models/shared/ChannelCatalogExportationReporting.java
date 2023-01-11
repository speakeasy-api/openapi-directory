package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ChannelCatalogExportationReporting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheStatus")
    public String cacheStatus;
    public ChannelCatalogExportationReporting withCacheStatus(String cacheStatus) {
        this.cacheStatus = cacheStatus;
        return this;
    }
    @JsonProperty("clientIpAddress")
    public String clientIpAddress;
    public ChannelCatalogExportationReporting withClientIpAddress(String clientIpAddress) {
        this.clientIpAddress = clientIpAddress;
        return this;
    }
    @JsonProperty("clientUserAgent")
    public String clientUserAgent;
    public ChannelCatalogExportationReporting withClientUserAgent(String clientUserAgent) {
        this.clientUserAgent = clientUserAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportationDuration")
    public String exportationDuration;
    public ChannelCatalogExportationReporting withExportationDuration(String exportationDuration) {
        this.exportationDuration = exportationDuration;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("exportationUtcDate")
    public OffsetDateTime exportationUtcDate;
    public ChannelCatalogExportationReporting withExportationUtcDate(OffsetDateTime exportationUtcDate) {
        this.exportationUtcDate = exportationUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportedProductCount")
    public Integer exportedProductCount;
    public ChannelCatalogExportationReporting withExportedProductCount(Integer exportedProductCount) {
        this.exportedProductCount = exportedProductCount;
        return this;
    }
}