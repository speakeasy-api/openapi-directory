package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutRegistryCatalogDataResponse {
    @JsonProperty("registryCatalogData")
    public RegistryCatalogData registryCatalogData;
    public PutRegistryCatalogDataResponse withRegistryCatalogData(RegistryCatalogData registryCatalogData) {
        this.registryCatalogData = registryCatalogData;
        return this;
    }
}