package openapisdk.models.operations;



public class CodesOfConductGetAllCodesOfConductResponse {
    public String contentType;
    public CodesOfConductGetAllCodesOfConductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CodesOfConductGetAllCodesOfConductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CodeOfConduct[] codeOfConducts;
    public CodesOfConductGetAllCodesOfConductResponse withCodeOfConducts(openapisdk.models.shared.CodeOfConduct[] codeOfConducts) {
        this.codeOfConducts = codeOfConducts;
        return this;
    }
    public CodesOfConductGetAllCodesOfConduct415ApplicationJson codesOfConductGetAllCodesOfConduct415ApplicationJSONObject;
    public CodesOfConductGetAllCodesOfConductResponse withCodesOfConductGetAllCodesOfConduct415ApplicationJsonObject(CodesOfConductGetAllCodesOfConduct415ApplicationJson codesOfConductGetAllCodesOfConduct415ApplicationJSONObject) {
        this.codesOfConductGetAllCodesOfConduct415ApplicationJSONObject = codesOfConductGetAllCodesOfConduct415ApplicationJSONObject;
        return this;
    }
}