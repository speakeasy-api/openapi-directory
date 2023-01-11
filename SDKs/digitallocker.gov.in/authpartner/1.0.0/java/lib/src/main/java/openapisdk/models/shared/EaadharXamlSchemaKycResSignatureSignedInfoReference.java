package openapisdk.models.shared;



public class EaadharXamlSchemaKycResSignatureSignedInfoReference {
    public EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod digestMethod;
    public EaadharXamlSchemaKycResSignatureSignedInfoReference withDigestMethod(EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod digestMethod) {
        this.digestMethod = digestMethod;
        return this;
    }
    public String digestValue;
    public EaadharXamlSchemaKycResSignatureSignedInfoReference withDigestValue(String digestValue) {
        this.digestValue = digestValue;
        return this;
    }
    public EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms transforms;
    public EaadharXamlSchemaKycResSignatureSignedInfoReference withTransforms(EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms transforms) {
        this.transforms = transforms;
        return this;
    }
    public String uri;
    public EaadharXamlSchemaKycResSignatureSignedInfoReference withUri(String uri) {
        this.uri = uri;
        return this;
    }
}