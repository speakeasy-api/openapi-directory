package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageScanningConfiguration
 * The image scanning configuration for a repository.
**/
public class ImageScanningConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scanOnPush")
    public Boolean scanOnPush;
    public ImageScanningConfiguration withScanOnPush(Boolean scanOnPush) {
        this.scanOnPush = scanOnPush;
        return this;
    }
}