package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TrackedClick {
    @JsonProperty("channel")
    public BeezUpCommonChannelBasicInfo channel;
    public TrackedClick withChannel(BeezUpCommonChannelBasicInfo channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("ipAddress")
    public String ipAddress;
    public TrackedClick withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonProperty("product")
    public BeezUpCommonProductBasicInfo product;
    public TrackedClick withProduct(BeezUpCommonProductBasicInfo product) {
        this.product = product;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("utcDate")
    public OffsetDateTime utcDate;
    public TrackedClick withUtcDate(OffsetDateTime utcDate) {
        this.utcDate = utcDate;
        return this;
    }
}