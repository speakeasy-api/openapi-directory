package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * SigningCertificate
 * <p>Contains information about an X.509 signing certificate.</p> <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a> operations. </p>
**/
public class SigningCertificate {
    public String certificateBody;
    public SigningCertificate withCertificateBody(String certificateBody) {
        this.certificateBody = certificateBody;
        return this;
    }
    public String certificateId;
    public SigningCertificate withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    public StatusTypeEnum status;
    public SigningCertificate withStatus(StatusTypeEnum status) {
        this.status = status;
        return this;
    }
    public OffsetDateTime uploadDate;
    public SigningCertificate withUploadDate(OffsetDateTime uploadDate) {
        this.uploadDate = uploadDate;
        return this;
    }
    public String userName;
    public SigningCertificate withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}