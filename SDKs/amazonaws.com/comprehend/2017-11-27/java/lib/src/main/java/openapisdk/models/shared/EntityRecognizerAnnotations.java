package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EntityRecognizerAnnotations
 * Describes the annotations associated with a entity recognizer.
**/
public class EntityRecognizerAnnotations {
    @JsonProperty("S3Uri")
    public String s3Uri;
    public EntityRecognizerAnnotations withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
}