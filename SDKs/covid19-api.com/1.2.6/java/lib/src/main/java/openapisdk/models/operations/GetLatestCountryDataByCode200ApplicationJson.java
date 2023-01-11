package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetLatestCountryDataByCode200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmed")
    public Long confirmed;
    public GetLatestCountryDataByCode200ApplicationJson withConfirmed(Long confirmed) {
        this.confirmed = confirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public GetLatestCountryDataByCode200ApplicationJson withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("critical")
    public Long critical;
    public GetLatestCountryDataByCode200ApplicationJson withCritical(Long critical) {
        this.critical = critical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deaths")
    public Long deaths;
    public GetLatestCountryDataByCode200ApplicationJson withDeaths(Long deaths) {
        this.deaths = deaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastChange")
    public OffsetDateTime lastChange;
    public GetLatestCountryDataByCode200ApplicationJson withLastChange(OffsetDateTime lastChange) {
        this.lastChange = lastChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdate")
    public OffsetDateTime lastUpdate;
    public GetLatestCountryDataByCode200ApplicationJson withLastUpdate(OffsetDateTime lastUpdate) {
        this.lastUpdate = lastUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Float latitude;
    public GetLatestCountryDataByCode200ApplicationJson withLatitude(Float latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Float longitude;
    public GetLatestCountryDataByCode200ApplicationJson withLongitude(Float longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recovered")
    public Long recovered;
    public GetLatestCountryDataByCode200ApplicationJson withRecovered(Long recovered) {
        this.recovered = recovered;
        return this;
    }
}