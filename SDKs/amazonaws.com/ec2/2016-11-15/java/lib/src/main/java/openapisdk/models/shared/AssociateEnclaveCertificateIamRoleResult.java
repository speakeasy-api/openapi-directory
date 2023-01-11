package openapisdk.models.shared;



public class AssociateEnclaveCertificateIamRoleResult {
    public java.util.Map<String, Object> certificateS3BucketName;
    public AssociateEnclaveCertificateIamRoleResult withCertificateS3BucketName(java.util.Map<String, Object> certificateS3BucketName) {
        this.certificateS3BucketName = certificateS3BucketName;
        return this;
    }
    public java.util.Map<String, Object> certificateS3ObjectKey;
    public AssociateEnclaveCertificateIamRoleResult withCertificateS3ObjectKey(java.util.Map<String, Object> certificateS3ObjectKey) {
        this.certificateS3ObjectKey = certificateS3ObjectKey;
        return this;
    }
    public java.util.Map<String, Object> encryptionKmsKeyId;
    public AssociateEnclaveCertificateIamRoleResult withEncryptionKmsKeyId(java.util.Map<String, Object> encryptionKmsKeyId) {
        this.encryptionKmsKeyId = encryptionKmsKeyId;
        return this;
    }
}