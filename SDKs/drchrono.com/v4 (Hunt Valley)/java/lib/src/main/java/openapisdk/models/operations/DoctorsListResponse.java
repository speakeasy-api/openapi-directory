package openapisdk.models.operations;



public class DoctorsListResponse {
    public String contentType;
    public DoctorsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DoctorsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DoctorsList200ApplicationJson doctorsList200ApplicationJSONObject;
    public DoctorsListResponse withDoctorsList200ApplicationJsonObject(DoctorsList200ApplicationJson doctorsList200ApplicationJSONObject) {
        this.doctorsList200ApplicationJSONObject = doctorsList200ApplicationJSONObject;
        return this;
    }
}