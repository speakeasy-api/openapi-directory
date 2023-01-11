package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateStoreRequest
 * The request to create a store. The store identifier is optional, if null it will be automatically computed.
**/
public class CreateStoreRequest {
    @JsonProperty("countryIsoCodeAlpha3")
    public String countryIsoCodeAlpha3;
    public CreateStoreRequest withCountryIsoCodeAlpha3(String countryIsoCodeAlpha3) {
        this.countryIsoCodeAlpha3 = countryIsoCodeAlpha3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateStoreRequest withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateStoreRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sectors")
    public String[] sectors;
    public CreateStoreRequest withSectors(String[] sectors) {
        this.sectors = sectors;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CreateStoreRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}