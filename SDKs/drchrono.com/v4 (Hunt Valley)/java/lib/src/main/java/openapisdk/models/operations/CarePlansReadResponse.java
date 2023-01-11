package openapisdk.models.operations;



public class CarePlansReadResponse {
    public openapisdk.models.shared.CarePlan carePlan;
    public CarePlansReadResponse withCarePlan(openapisdk.models.shared.CarePlan carePlan) {
        this.carePlan = carePlan;
        return this;
    }
    public String contentType;
    public CarePlansReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CarePlansReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}