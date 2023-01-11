package openapisdk.models.operations;



public class PutInsightSelectorsResponse {
    public String contentType;
    public PutInsightSelectorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientEncryptionPolicyException;
    public PutInsightSelectorsResponse withInsufficientEncryptionPolicyException(Object insufficientEncryptionPolicyException) {
        this.insufficientEncryptionPolicyException = insufficientEncryptionPolicyException;
        return this;
    }
    public Object insufficientS3BucketPolicyException;
    public PutInsightSelectorsResponse withInsufficientS3BucketPolicyException(Object insufficientS3BucketPolicyException) {
        this.insufficientS3BucketPolicyException = insufficientS3BucketPolicyException;
        return this;
    }
    public Object invalidHomeRegionException;
    public PutInsightSelectorsResponse withInvalidHomeRegionException(Object invalidHomeRegionException) {
        this.invalidHomeRegionException = invalidHomeRegionException;
        return this;
    }
    public Object invalidInsightSelectorsException;
    public PutInsightSelectorsResponse withInvalidInsightSelectorsException(Object invalidInsightSelectorsException) {
        this.invalidInsightSelectorsException = invalidInsightSelectorsException;
        return this;
    }
    public Object invalidTrailNameException;
    public PutInsightSelectorsResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object kmsException;
    public PutInsightSelectorsResponse withKmsException(Object kmsException) {
        this.kmsException = kmsException;
        return this;
    }
    public Object notOrganizationMasterAccountException;
    public PutInsightSelectorsResponse withNotOrganizationMasterAccountException(Object notOrganizationMasterAccountException) {
        this.notOrganizationMasterAccountException = notOrganizationMasterAccountException;
        return this;
    }
    public Object operationNotPermittedException;
    public PutInsightSelectorsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public openapisdk.models.shared.PutInsightSelectorsResponse putInsightSelectorsResponse;
    public PutInsightSelectorsResponse withPutInsightSelectorsResponse(openapisdk.models.shared.PutInsightSelectorsResponse putInsightSelectorsResponse) {
        this.putInsightSelectorsResponse = putInsightSelectorsResponse;
        return this;
    }
    public Object s3BucketDoesNotExistException;
    public PutInsightSelectorsResponse withS3BucketDoesNotExistException(Object s3BucketDoesNotExistException) {
        this.s3BucketDoesNotExistException = s3BucketDoesNotExistException;
        return this;
    }
    public Long statusCode;
    public PutInsightSelectorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object trailNotFoundException;
    public PutInsightSelectorsResponse withTrailNotFoundException(Object trailNotFoundException) {
        this.trailNotFoundException = trailNotFoundException;
        return this;
    }
    public Object unsupportedOperationException;
    public PutInsightSelectorsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}