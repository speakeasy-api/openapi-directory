package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageScanStatus
 * The current status of an image scan.
**/
public class ImageScanStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ImageScanStatus withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ScanStatusEnum status;
    public ImageScanStatus withStatus(ScanStatusEnum status) {
        this.status = status;
        return this;
    }
}