package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublicChannelInfo {
    @JsonProperty("homeUrl")
    public String homeUrl;
    public PublicChannelInfo withHomeUrl(String homeUrl) {
        this.homeUrl = homeUrl;
        return this;
    }
    @JsonProperty("logoUrl")
    public String logoUrl;
    public PublicChannelInfo withLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PublicChannelInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sectors")
    public String[] sectors;
    public PublicChannelInfo withSectors(String[] sectors) {
        this.sectors = sectors;
        return this;
    }
    @JsonProperty("types")
    public String[] types;
    public PublicChannelInfo withTypes(String[] types) {
        this.types = types;
        return this;
    }
}