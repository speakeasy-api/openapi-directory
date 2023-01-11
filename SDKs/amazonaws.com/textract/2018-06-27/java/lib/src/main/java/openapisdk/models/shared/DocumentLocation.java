package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentLocation
 * <p>The Amazon S3 bucket that contains the document to be processed. It's used by asynchronous operations such as <a>StartDocumentTextDetection</a>.</p> <p>The input document can be an image file in JPEG or PNG format. It can also be a file in PDF format.</p>
**/
public class DocumentLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Object")
    public S3Object s3Object;
    public DocumentLocation withS3Object(S3Object s3Object) {
        this.s3Object = s3Object;
        return this;
    }
}