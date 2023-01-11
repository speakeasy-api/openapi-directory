package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ZoneStatistics {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public ZoneStatistics withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonProperty("dec")
    public Long dec;
    public ZoneStatistics withDec(Long dec) {
        this.dec = dec;
        return this;
    }
    @JsonProperty("inc")
    public Long inc;
    public ZoneStatistics withInc(Long inc) {
        this.inc = inc;
        return this;
    }
    @JsonProperty("total")
    public Long total;
    public ZoneStatistics withTotal(Long total) {
        this.total = total;
        return this;
    }
    @JsonProperty("zone")
    public String zone;
    public ZoneStatistics withZone(String zone) {
        this.zone = zone;
        return this;
    }
}