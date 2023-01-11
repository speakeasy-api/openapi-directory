package openapisdk.models.operations;



public class DescribePiiEntitiesDetectionJobResponse {
    public String contentType;
    public DescribePiiEntitiesDetectionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePiiEntitiesDetectionJobResponse describePiiEntitiesDetectionJobResponse;
    public DescribePiiEntitiesDetectionJobResponse withDescribePiiEntitiesDetectionJobResponse(openapisdk.models.shared.DescribePiiEntitiesDetectionJobResponse describePiiEntitiesDetectionJobResponse) {
        this.describePiiEntitiesDetectionJobResponse = describePiiEntitiesDetectionJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribePiiEntitiesDetectionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribePiiEntitiesDetectionJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object jobNotFoundException;
    public DescribePiiEntitiesDetectionJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePiiEntitiesDetectionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribePiiEntitiesDetectionJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}