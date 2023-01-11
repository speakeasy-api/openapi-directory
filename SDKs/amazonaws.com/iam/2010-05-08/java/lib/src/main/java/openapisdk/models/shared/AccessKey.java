package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * AccessKey
 * <p>Contains information about an Amazon Web Services access key.</p> <p> This data type is used as a response element in the <a>CreateAccessKey</a> and <a>ListAccessKeys</a> operations. </p> <note> <p>The <code>SecretAccessKey</code> value is returned only in response to <a>CreateAccessKey</a>. You can get a secret access key only when you first create an access key; you cannot recover the secret access key later. If you lose a secret access key, you must create a new access key.</p> </note>
**/
public class AccessKey {
    public String accessKeyId;
    public AccessKey withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    public OffsetDateTime createDate;
    public AccessKey withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public String secretAccessKey;
    public AccessKey withSecretAccessKey(String secretAccessKey) {
        this.secretAccessKey = secretAccessKey;
        return this;
    }
    public StatusTypeEnum status;
    public AccessKey withStatus(StatusTypeEnum status) {
        this.status = status;
        return this;
    }
    public String userName;
    public AccessKey withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}