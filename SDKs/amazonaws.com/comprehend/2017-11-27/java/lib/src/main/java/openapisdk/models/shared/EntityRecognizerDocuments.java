package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EntityRecognizerDocuments
 * Describes the training documents submitted with an entity recognizer.
**/
public class EntityRecognizerDocuments {
    @JsonProperty("S3Uri")
    public String s3Uri;
    public EntityRecognizerDocuments withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
}