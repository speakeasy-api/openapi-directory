package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetectedCatalogColumnList
 * The list of detected catalog column
**/
public class DetectedCatalogColumnList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectedCatalogColumns")
    public DetectedCatalogColumn[] detectedCatalogColumns;
    public DetectedCatalogColumnList withDetectedCatalogColumns(DetectedCatalogColumn[] detectedCatalogColumns) {
        this.detectedCatalogColumns = detectedCatalogColumns;
        return this;
    }
    @JsonProperty("links")
    public DetectedCatalogColumnListLinks links;
    public DetectedCatalogColumnList withLinks(DetectedCatalogColumnListLinks links) {
        this.links = links;
        return this;
    }
}