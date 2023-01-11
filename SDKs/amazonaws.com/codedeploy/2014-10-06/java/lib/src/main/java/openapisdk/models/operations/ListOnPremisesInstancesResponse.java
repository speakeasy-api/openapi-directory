package openapisdk.models.operations;



public class ListOnPremisesInstancesResponse {
    public String contentType;
    public ListOnPremisesInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListOnPremisesInstancesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidRegistrationStatusException;
    public ListOnPremisesInstancesResponse withInvalidRegistrationStatusException(Object invalidRegistrationStatusException) {
        this.invalidRegistrationStatusException = invalidRegistrationStatusException;
        return this;
    }
    public Object invalidTagFilterException;
    public ListOnPremisesInstancesResponse withInvalidTagFilterException(Object invalidTagFilterException) {
        this.invalidTagFilterException = invalidTagFilterException;
        return this;
    }
    public openapisdk.models.shared.ListOnPremisesInstancesOutput listOnPremisesInstancesOutput;
    public ListOnPremisesInstancesResponse withListOnPremisesInstancesOutput(openapisdk.models.shared.ListOnPremisesInstancesOutput listOnPremisesInstancesOutput) {
        this.listOnPremisesInstancesOutput = listOnPremisesInstancesOutput;
        return this;
    }
    public Long statusCode;
    public ListOnPremisesInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}