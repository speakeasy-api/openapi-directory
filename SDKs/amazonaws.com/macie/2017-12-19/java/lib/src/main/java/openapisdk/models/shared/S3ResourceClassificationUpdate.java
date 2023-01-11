package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3ResourceClassificationUpdate
 * The S3 resources whose classification types you want to update. This data type is used as a request parameter in the UpdateS3Resources action. 
**/
public class S3ResourceClassificationUpdate {
    @JsonProperty("bucketName")
    public String bucketName;
    public S3ResourceClassificationUpdate withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonProperty("classificationTypeUpdate")
    public ClassificationTypeUpdate classificationTypeUpdate;
    public S3ResourceClassificationUpdate withClassificationTypeUpdate(ClassificationTypeUpdate classificationTypeUpdate) {
        this.classificationTypeUpdate = classificationTypeUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public S3ResourceClassificationUpdate withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}