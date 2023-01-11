package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EntityRecognizerEntityList
 * Describes the entity recognizer submitted with an entity recognizer.
**/
public class EntityRecognizerEntityList {
    @JsonProperty("S3Uri")
    public String s3Uri;
    public EntityRecognizerEntityList withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
}