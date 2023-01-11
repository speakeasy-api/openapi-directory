package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BaseScreenshot
 * A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.
**/
public class BaseScreenshot {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IgnoreCoordinates")
    public String[] ignoreCoordinates;
    public BaseScreenshot withIgnoreCoordinates(String[] ignoreCoordinates) {
        this.ignoreCoordinates = ignoreCoordinates;
        return this;
    }
    @JsonProperty("ScreenshotName")
    public String screenshotName;
    public BaseScreenshot withScreenshotName(String screenshotName) {
        this.screenshotName = screenshotName;
        return this;
    }
}