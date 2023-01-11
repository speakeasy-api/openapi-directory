package openapisdk.models.operations;



public class GetEAadhaarDataInXmlFormatIdResponse {
    public byte[] body;
    public GetEAadhaarDataInXmlFormatIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetEAadhaarDataInXmlFormatIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetEAadhaarDataInXmlFormatId401ApplicationJson getEAadhaarDataInXMLFormatId401ApplicationJSONObject;
    public GetEAadhaarDataInXmlFormatIdResponse withGetEAadhaarDataInXmlFormatId401ApplicationJsonObject(GetEAadhaarDataInXmlFormatId401ApplicationJson getEAadhaarDataInXMLFormatId401ApplicationJSONObject) {
        this.getEAadhaarDataInXMLFormatId401ApplicationJSONObject = getEAadhaarDataInXMLFormatId401ApplicationJSONObject;
        return this;
    }
    public GetEAadhaarDataInXmlFormatId404ApplicationJson getEAadhaarDataInXMLFormatId404ApplicationJSONObject;
    public GetEAadhaarDataInXmlFormatIdResponse withGetEAadhaarDataInXmlFormatId404ApplicationJsonObject(GetEAadhaarDataInXmlFormatId404ApplicationJson getEAadhaarDataInXMLFormatId404ApplicationJSONObject) {
        this.getEAadhaarDataInXMLFormatId404ApplicationJSONObject = getEAadhaarDataInXMLFormatId404ApplicationJSONObject;
        return this;
    }
    public Object getEAadhaarDataInXMLFormatId500ApplicationJSONOneOf;
    public GetEAadhaarDataInXmlFormatIdResponse withGetEAadhaarDataInXmlFormatId500ApplicationJsonOneOf(Object getEAadhaarDataInXMLFormatId500ApplicationJSONOneOf) {
        this.getEAadhaarDataInXMLFormatId500ApplicationJSONOneOf = getEAadhaarDataInXMLFormatId500ApplicationJSONOneOf;
        return this;
    }
    public Object getEAadhaarDataInXMLFormatId503ApplicationJSONOneOf;
    public GetEAadhaarDataInXmlFormatIdResponse withGetEAadhaarDataInXmlFormatId503ApplicationJsonOneOf(Object getEAadhaarDataInXMLFormatId503ApplicationJSONOneOf) {
        this.getEAadhaarDataInXMLFormatId503ApplicationJSONOneOf = getEAadhaarDataInXMLFormatId503ApplicationJSONOneOf;
        return this;
    }
    public Long statusCode;
    public GetEAadhaarDataInXmlFormatIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}