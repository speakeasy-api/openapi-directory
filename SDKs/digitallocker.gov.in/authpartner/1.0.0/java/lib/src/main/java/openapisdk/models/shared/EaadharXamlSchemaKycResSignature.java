package openapisdk.models.shared;



public class EaadharXamlSchemaKycResSignature {
    public EaadharXamlSchemaKycResSignatureKeyInfo keyInfo;
    public EaadharXamlSchemaKycResSignature withKeyInfo(EaadharXamlSchemaKycResSignatureKeyInfo keyInfo) {
        this.keyInfo = keyInfo;
        return this;
    }
    public String signatureValue;
    public EaadharXamlSchemaKycResSignature withSignatureValue(String signatureValue) {
        this.signatureValue = signatureValue;
        return this;
    }
    public EaadharXamlSchemaKycResSignatureSignedInfo signedInfo;
    public EaadharXamlSchemaKycResSignature withSignedInfo(EaadharXamlSchemaKycResSignatureSignedInfo signedInfo) {
        this.signedInfo = signedInfo;
        return this;
    }
    public String xmlns;
    public EaadharXamlSchemaKycResSignature withXmlns(String xmlns) {
        this.xmlns = xmlns;
        return this;
    }
}