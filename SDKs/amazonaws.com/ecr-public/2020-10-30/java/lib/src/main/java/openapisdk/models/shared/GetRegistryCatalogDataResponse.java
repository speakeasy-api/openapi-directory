package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRegistryCatalogDataResponse {
    @JsonProperty("registryCatalogData")
    public RegistryCatalogData registryCatalogData;
    public GetRegistryCatalogDataResponse withRegistryCatalogData(RegistryCatalogData registryCatalogData) {
        this.registryCatalogData = registryCatalogData;
        return this;
    }
}