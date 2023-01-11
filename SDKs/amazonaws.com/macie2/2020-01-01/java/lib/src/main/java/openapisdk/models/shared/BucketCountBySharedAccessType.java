package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketCountBySharedAccessType
 * Provides information about the number of S3 buckets that are or aren't shared with other Amazon Web Services accounts.
**/
public class BucketCountBySharedAccessType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external")
    public Long external;
    public BucketCountBySharedAccessType withExternal(Long external) {
        this.external = external;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internal")
    public Long internal;
    public BucketCountBySharedAccessType withInternal(Long internal) {
        this.internal = internal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notShared")
    public Long notShared;
    public BucketCountBySharedAccessType withNotShared(Long notShared) {
        this.notShared = notShared;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unknown")
    public Long unknown;
    public BucketCountBySharedAccessType withUnknown(Long unknown) {
        this.unknown = unknown;
        return this;
    }
}