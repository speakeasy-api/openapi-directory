package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importations")
    public ImportationReporting[] importations;
    public ImportationsResponse withImportations(ImportationReporting[] importations) {
        this.importations = importations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ImportationsResponseLinks links;
    public ImportationsResponse withLinks(ImportationsResponseLinks links) {
        this.links = links;
        return this;
    }
}