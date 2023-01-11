package openapisdk.models.shared;



public class XmlFormatSchemaSignature {
    public XmlFormatSchemaSignatureKeyInfo keyInfo;
    public XmlFormatSchemaSignature withKeyInfo(XmlFormatSchemaSignatureKeyInfo keyInfo) {
        this.keyInfo = keyInfo;
        return this;
    }
    public Object signatureValue;
    public XmlFormatSchemaSignature withSignatureValue(Object signatureValue) {
        this.signatureValue = signatureValue;
        return this;
    }
    public Object signedInfo;
    public XmlFormatSchemaSignature withSignedInfo(Object signedInfo) {
        this.signedInfo = signedInfo;
        return this;
    }
}