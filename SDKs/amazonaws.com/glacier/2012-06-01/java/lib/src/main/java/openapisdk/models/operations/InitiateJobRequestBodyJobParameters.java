package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InitiateJobRequestBodyJobParameters
 * Provides options for defining a job.
**/
public class InitiateJobRequestBodyJobParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ArchiveId")
    public String archiveId;
    public InitiateJobRequestBodyJobParameters withArchiveId(String archiveId) {
        this.archiveId = archiveId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public InitiateJobRequestBodyJobParameters withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Format")
    public String format;
    public InitiateJobRequestBodyJobParameters withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InventoryRetrievalParameters")
    public openapisdk.models.shared.InventoryRetrievalJobInput inventoryRetrievalParameters;
    public InitiateJobRequestBodyJobParameters withInventoryRetrievalParameters(openapisdk.models.shared.InventoryRetrievalJobInput inventoryRetrievalParameters) {
        this.inventoryRetrievalParameters = inventoryRetrievalParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputLocation")
    public openapisdk.models.shared.OutputLocation outputLocation;
    public InitiateJobRequestBodyJobParameters withOutputLocation(openapisdk.models.shared.OutputLocation outputLocation) {
        this.outputLocation = outputLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetrievalByteRange")
    public String retrievalByteRange;
    public InitiateJobRequestBodyJobParameters withRetrievalByteRange(String retrievalByteRange) {
        this.retrievalByteRange = retrievalByteRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SNSTopic")
    public String snsTopic;
    public InitiateJobRequestBodyJobParameters withSnsTopic(String snsTopic) {
        this.snsTopic = snsTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SelectParameters")
    public openapisdk.models.shared.SelectParameters selectParameters;
    public InitiateJobRequestBodyJobParameters withSelectParameters(openapisdk.models.shared.SelectParameters selectParameters) {
        this.selectParameters = selectParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tier")
    public String tier;
    public InitiateJobRequestBodyJobParameters withTier(String tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public InitiateJobRequestBodyJobParameters withType(String type) {
        this.type = type;
        return this;
    }
}