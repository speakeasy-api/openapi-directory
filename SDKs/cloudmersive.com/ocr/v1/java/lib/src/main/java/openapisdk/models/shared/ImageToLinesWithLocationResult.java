package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageToLinesWithLocationResult
 * Result of an image to lines-with-location OCR operation
**/
public class ImageToLinesWithLocationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Lines")
    public OcrLineElement[] lines;
    public ImageToLinesWithLocationResult withLines(OcrLineElement[] lines) {
        this.lines = lines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;
    public ImageToLinesWithLocationResult withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
}