package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continent")
    public String continent;
    public ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin withContinent(String continent) {
        this.continent = continent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_centers")
    public String[] dataCenters;
    public ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin withDataCenters(String[] dataCenters) {
        this.dataCenters = dataCenters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default")
    public Boolean default_;
    public ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin withDefault(Boolean default_) {
        this.default_ = default_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flag")
    public String flag;
    public ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin withFlag(String flag) {
        this.flag = flag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}