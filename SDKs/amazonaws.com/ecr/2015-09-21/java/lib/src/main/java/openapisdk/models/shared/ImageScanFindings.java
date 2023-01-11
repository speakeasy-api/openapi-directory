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
 * ImageScanFindings
 * The details of an image scan.
**/
public class ImageScanFindings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingSeverityCounts")
    public java.util.Map<String, Long> findingSeverityCounts;
    public ImageScanFindings withFindingSeverityCounts(java.util.Map<String, Long> findingSeverityCounts) {
        this.findingSeverityCounts = findingSeverityCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findings")
    public ImageScanFinding[] findings;
    public ImageScanFindings withFindings(ImageScanFinding[] findings) {
        this.findings = findings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("imageScanCompletedAt")
    public OffsetDateTime imageScanCompletedAt;
    public ImageScanFindings withImageScanCompletedAt(OffsetDateTime imageScanCompletedAt) {
        this.imageScanCompletedAt = imageScanCompletedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("vulnerabilitySourceUpdatedAt")
    public OffsetDateTime vulnerabilitySourceUpdatedAt;
    public ImageScanFindings withVulnerabilitySourceUpdatedAt(OffsetDateTime vulnerabilitySourceUpdatedAt) {
        this.vulnerabilitySourceUpdatedAt = vulnerabilitySourceUpdatedAt;
        return this;
    }
}