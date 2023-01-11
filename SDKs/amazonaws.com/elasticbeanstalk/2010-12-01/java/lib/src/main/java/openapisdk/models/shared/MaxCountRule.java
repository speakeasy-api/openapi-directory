package openapisdk.models.shared;



/**
 * MaxCountRule
 * A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.
**/
public class MaxCountRule {
    public Boolean deleteSourceFromS3;
    public MaxCountRule withDeleteSourceFromS3(Boolean deleteSourceFromS3) {
        this.deleteSourceFromS3 = deleteSourceFromS3;
        return this;
    }
    public Boolean enabled;
    public MaxCountRule withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public Long maxCount;
    public MaxCountRule withMaxCount(Long maxCount) {
        this.maxCount = maxCount;
        return this;
    }
}