package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPlanRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalPlanOptionsMap")
    public java.util.Map<String, String> additionalPlanOptionsMap;
    public GetPlanRequest withAdditionalPlanOptionsMap(java.util.Map<String, String> additionalPlanOptionsMap) {
        this.additionalPlanOptionsMap = additionalPlanOptionsMap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Language")
    public LanguageEnum language;
    public GetPlanRequest withLanguage(LanguageEnum language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public Location location;
    public GetPlanRequest withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonProperty("Mapping")
    public MappingEntry[] mapping;
    public GetPlanRequest withMapping(MappingEntry[] mapping) {
        this.mapping = mapping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sinks")
    public CatalogEntry[] sinks;
    public GetPlanRequest withSinks(CatalogEntry[] sinks) {
        this.sinks = sinks;
        return this;
    }
    @JsonProperty("Source")
    public CatalogEntry source;
    public GetPlanRequest withSource(CatalogEntry source) {
        this.source = source;
        return this;
    }
}