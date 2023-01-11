package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Metadata
 * Type the defines the metadata information of the report. This includes the headers and the individual metadata records.
**/
public class Metadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataHeader")
    public MetadataHeader metadataHeader;
    public Metadata withMetadataHeader(MetadataHeader metadataHeader) {
        this.metadataHeader = metadataHeader;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadataRecords")
    public MetadataRecord[] metadataRecords;
    public Metadata withMetadataRecords(MetadataRecord[] metadataRecords) {
        this.metadataRecords = metadataRecords;
        return this;
    }
}