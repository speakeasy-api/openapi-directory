package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * AccessKeyMetadata
 * <p>Contains information about an Amazon Web Services access key, without its secret key.</p> <p>This data type is used as a response element in the <a>ListAccessKeys</a> operation.</p>
**/
public class AccessKeyMetadata {
    public String accessKeyId;
    public AccessKeyMetadata withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    public OffsetDateTime createDate;
    public AccessKeyMetadata withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public StatusTypeEnum status;
    public AccessKeyMetadata withStatus(StatusTypeEnum status) {
        this.status = status;
        return this;
    }
    public String userName;
    public AccessKeyMetadata withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}