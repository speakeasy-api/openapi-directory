package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CountryStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_cases")
    public Long activeCases;
    public CountryStats withActiveCases(Long activeCases) {
        this.activeCases = activeCases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cases_per_mill_pop")
    public Double casesPerMillPop;
    public CountryStats withCasesPerMillPop(Double casesPerMillPop) {
        this.casesPerMillPop = casesPerMillPop;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public CountryStats withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flag")
    public String flag;
    public CountryStats withFlag(String flag) {
        this.flag = flag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_update")
    public OffsetDateTime lastUpdate;
    public CountryStats withLastUpdate(OffsetDateTime lastUpdate) {
        this.lastUpdate = lastUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_cases")
    public Long newCases;
    public CountryStats withNewCases(Long newCases) {
        this.newCases = newCases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_deaths")
    public Long newDeaths;
    public CountryStats withNewDeaths(Long newDeaths) {
        this.newDeaths = newDeaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serious_critical")
    public Long seriousCritical;
    public CountryStats withSeriousCritical(Long seriousCritical) {
        this.seriousCritical = seriousCritical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_cases")
    public Long totalCases;
    public CountryStats withTotalCases(Long totalCases) {
        this.totalCases = totalCases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_deaths")
    public Long totalDeaths;
    public CountryStats withTotalDeaths(Long totalDeaths) {
        this.totalDeaths = totalDeaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_recovered")
    public String totalRecovered;
    public CountryStats withTotalRecovered(String totalRecovered) {
        this.totalRecovered = totalRecovered;
        return this;
    }
}