package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetLatestTotals200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmed")
    public Long confirmed;
    public GetLatestTotals200ApplicationJson withConfirmed(Long confirmed) {
        this.confirmed = confirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("critical")
    public Long critical;
    public GetLatestTotals200ApplicationJson withCritical(Long critical) {
        this.critical = critical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deaths")
    public Long deaths;
    public GetLatestTotals200ApplicationJson withDeaths(Long deaths) {
        this.deaths = deaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastChange")
    public OffsetDateTime lastChange;
    public GetLatestTotals200ApplicationJson withLastChange(OffsetDateTime lastChange) {
        this.lastChange = lastChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdate")
    public OffsetDateTime lastUpdate;
    public GetLatestTotals200ApplicationJson withLastUpdate(OffsetDateTime lastUpdate) {
        this.lastUpdate = lastUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recovered")
    public Long recovered;
    public GetLatestTotals200ApplicationJson withRecovered(Long recovered) {
        this.recovered = recovered;
        return this;
    }
}