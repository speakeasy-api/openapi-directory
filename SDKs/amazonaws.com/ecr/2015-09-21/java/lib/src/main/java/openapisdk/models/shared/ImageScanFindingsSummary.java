package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ImageScanFindingsSummary
 * A summary of the last completed image scan.
**/
public class ImageScanFindingsSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingSeverityCounts")
    public java.util.Map<String, Long> findingSeverityCounts;
    public ImageScanFindingsSummary withFindingSeverityCounts(java.util.Map<String, Long> findingSeverityCounts) {
        this.findingSeverityCounts = findingSeverityCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("imageScanCompletedAt")
    public OffsetDateTime imageScanCompletedAt;
    public ImageScanFindingsSummary withImageScanCompletedAt(OffsetDateTime imageScanCompletedAt) {
        this.imageScanCompletedAt = imageScanCompletedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("vulnerabilitySourceUpdatedAt")
    public OffsetDateTime vulnerabilitySourceUpdatedAt;
    public ImageScanFindingsSummary withVulnerabilitySourceUpdatedAt(OffsetDateTime vulnerabilitySourceUpdatedAt) {
        this.vulnerabilitySourceUpdatedAt = vulnerabilitySourceUpdatedAt;
        return this;
    }
}