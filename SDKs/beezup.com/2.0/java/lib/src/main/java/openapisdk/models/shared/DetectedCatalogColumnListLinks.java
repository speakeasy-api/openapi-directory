package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DetectedCatalogColumnListLinks {
    @JsonProperty("self")
    public LinksImportationGetDetectedCatalogColumnsLink self;
    public DetectedCatalogColumnListLinks withSelf(LinksImportationGetDetectedCatalogColumnsLink self) {
        this.self = self;
        return this;
    }
}