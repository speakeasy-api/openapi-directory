package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3ResourceClassification
 * The S3 resources that you want to associate with Amazon Macie Classic for monitoring and data classification. This data type is used as a request parameter in the AssociateS3Resources action and a response parameter in the ListS3Resources action. 
**/
public class S3ResourceClassification {
    @JsonProperty("bucketName")
    public String bucketName;
    public S3ResourceClassification withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonProperty("classificationType")
    public ClassificationType classificationType;
    public S3ResourceClassification withClassificationType(ClassificationType classificationType) {
        this.classificationType = classificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public S3ResourceClassification withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}