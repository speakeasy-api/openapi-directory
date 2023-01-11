package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * S3Bucket
 * Provides information about the S3 bucket that a finding applies to.
**/
public class S3Bucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowsUnencryptedObjectUploads")
    public AllowsUnencryptedObjectUploadsEnum allowsUnencryptedObjectUploads;
    public S3Bucket withAllowsUnencryptedObjectUploads(AllowsUnencryptedObjectUploadsEnum allowsUnencryptedObjectUploads) {
        this.allowsUnencryptedObjectUploads = allowsUnencryptedObjectUploads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public S3Bucket withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public S3Bucket withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultServerSideEncryption")
    public ServerSideEncryption defaultServerSideEncryption;
    public S3Bucket withDefaultServerSideEncryption(ServerSideEncryption defaultServerSideEncryption) {
        this.defaultServerSideEncryption = defaultServerSideEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public S3Bucket withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public S3BucketOwner owner;
    public S3Bucket withOwner(S3BucketOwner owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicAccess")
    public BucketPublicAccess publicAccess;
    public S3Bucket withPublicAccess(BucketPublicAccess publicAccess) {
        this.publicAccess = publicAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public KeyValuePair[] tags;
    public S3Bucket withTags(KeyValuePair[] tags) {
        this.tags = tags;
        return this;
    }
}