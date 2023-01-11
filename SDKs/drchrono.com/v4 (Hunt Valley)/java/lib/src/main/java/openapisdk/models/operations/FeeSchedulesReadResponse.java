package openapisdk.models.operations;



public class FeeSchedulesReadResponse {
    public String contentType;
    public FeeSchedulesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DoctorFeeSchedule doctorFeeSchedule;
    public FeeSchedulesReadResponse withDoctorFeeSchedule(openapisdk.models.shared.DoctorFeeSchedule doctorFeeSchedule) {
        this.doctorFeeSchedule = doctorFeeSchedule;
        return this;
    }
    public Long statusCode;
    public FeeSchedulesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}