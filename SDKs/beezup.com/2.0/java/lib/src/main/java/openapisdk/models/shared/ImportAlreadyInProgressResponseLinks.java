package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImportAlreadyInProgressResponseLinks
 * The action links
**/
public class ImportAlreadyInProgressResponseLinks {
    @JsonProperty("cancelCurrentImportation")
    public LinksImportationCancelLink cancelCurrentImportation;
    public ImportAlreadyInProgressResponseLinks withCancelCurrentImportation(LinksImportationCancelLink cancelCurrentImportation) {
        this.cancelCurrentImportation = cancelCurrentImportation;
        return this;
    }
    @JsonProperty("currentImportation")
    public LinksImportationGetImportationMonitoringLink currentImportation;
    public ImportAlreadyInProgressResponseLinks withCurrentImportation(LinksImportationGetImportationMonitoringLink currentImportation) {
        this.currentImportation = currentImportation;
        return this;
    }
}