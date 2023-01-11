package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PhotoToWordsWithLocationResult
 * Result of an photo to words-with-location OCR operation
**/
public class PhotoToWordsWithLocationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DiagnosticImage")
    public String diagnosticImage;
    public PhotoToWordsWithLocationResult withDiagnosticImage(String diagnosticImage) {
        this.diagnosticImage = diagnosticImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;
    public PhotoToWordsWithLocationResult withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextElements")
    public OcrPhotoTextElement[] textElements;
    public PhotoToWordsWithLocationResult withTextElements(OcrPhotoTextElement[] textElements) {
        this.textElements = textElements;
        return this;
    }
}