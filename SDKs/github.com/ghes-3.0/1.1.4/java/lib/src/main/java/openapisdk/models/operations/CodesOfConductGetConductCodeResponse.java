package openapisdk.models.operations;



public class CodesOfConductGetConductCodeResponse {
    public String contentType;
    public CodesOfConductGetConductCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodesOfConductGetConductCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public CodesOfConductGetConductCodeResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.CodeOfConduct codeOfConduct;
    public CodesOfConductGetConductCodeResponse withCodeOfConduct(openapisdk.models.shared.CodeOfConduct codeOfConduct) {
        this.codeOfConduct = codeOfConduct;
        return this;
    }
    public CodesOfConductGetConductCode415ApplicationJson codesOfConductGetConductCode415ApplicationJSONObject;
    public CodesOfConductGetConductCodeResponse withCodesOfConductGetConductCode415ApplicationJsonObject(CodesOfConductGetConductCode415ApplicationJson codesOfConductGetConductCode415ApplicationJSONObject) {
        this.codesOfConductGetConductCode415ApplicationJSONObject = codesOfConductGetConductCode415ApplicationJSONObject;
        return this;
    }
}