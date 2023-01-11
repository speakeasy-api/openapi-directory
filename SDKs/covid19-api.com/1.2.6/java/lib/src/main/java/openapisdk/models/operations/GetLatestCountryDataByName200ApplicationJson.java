package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetLatestCountryDataByName200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmed")
    public Long confirmed;
    public GetLatestCountryDataByName200ApplicationJson withConfirmed(Long confirmed) {
        this.confirmed = confirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public GetLatestCountryDataByName200ApplicationJson withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("critical")
    public Long critical;
    public GetLatestCountryDataByName200ApplicationJson withCritical(Long critical) {
        this.critical = critical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deaths")
    public Long deaths;
    public GetLatestCountryDataByName200ApplicationJson withDeaths(Long deaths) {
        this.deaths = deaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastChange")
    public OffsetDateTime lastChange;
    public GetLatestCountryDataByName200ApplicationJson withLastChange(OffsetDateTime lastChange) {
        this.lastChange = lastChange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdate")
    public OffsetDateTime lastUpdate;
    public GetLatestCountryDataByName200ApplicationJson withLastUpdate(OffsetDateTime lastUpdate) {
        this.lastUpdate = lastUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Float latitude;
    public GetLatestCountryDataByName200ApplicationJson withLatitude(Float latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Float longitude;
    public GetLatestCountryDataByName200ApplicationJson withLongitude(Float longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recovered")
    public Long recovered;
    public GetLatestCountryDataByName200ApplicationJson withRecovered(Long recovered) {
        this.recovered = recovered;
        return this;
    }
}