package openapisdk.models.shared;



public class EaadharXamlSchemaKycResSignatureSignedInfo {
    public EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod canonicalizationMethod;
    public EaadharXamlSchemaKycResSignatureSignedInfo withCanonicalizationMethod(EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod canonicalizationMethod) {
        this.canonicalizationMethod = canonicalizationMethod;
        return this;
    }
    public EaadharXamlSchemaKycResSignatureSignedInfoReference reference;
    public EaadharXamlSchemaKycResSignatureSignedInfo withReference(EaadharXamlSchemaKycResSignatureSignedInfoReference reference) {
        this.reference = reference;
        return this;
    }
    public EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod signatureMethod;
    public EaadharXamlSchemaKycResSignatureSignedInfo withSignatureMethod(EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod signatureMethod) {
        this.signatureMethod = signatureMethod;
        return this;
    }
}