package openapisdk.models.shared;



public class XmlFormatSchema {
    public Object[] certificateData;
    public XmlFormatSchema withCertificateData(Object[] certificateData) {
        this.certificateData = certificateData;
        return this;
    }
    public XmlFormatSchemaSignature signature;
    public XmlFormatSchema withSignature(XmlFormatSchemaSignature signature) {
        this.signature = signature;
        return this;
    }
}