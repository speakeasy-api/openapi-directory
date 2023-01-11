package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageToWordsWithLocationResult
 * Result of an image to words-with-location OCR operation
**/
public class ImageToWordsWithLocationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;
    public ImageToWordsWithLocationResult withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Words")
    public OcrWordElement[] words;
    public ImageToWordsWithLocationResult withWords(OcrWordElement[] words) {
        this.words = words;
        return this;
    }
}