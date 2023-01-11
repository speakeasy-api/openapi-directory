package openapisdk.models.operations;



public class StartReplicationTaskAssessmentRunResponse {
    public Object accessDeniedFault;
    public StartReplicationTaskAssessmentRunResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public StartReplicationTaskAssessmentRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceStateFault;
    public StartReplicationTaskAssessmentRunResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object kmsAccessDeniedFault;
    public StartReplicationTaskAssessmentRunResponse withKmsAccessDeniedFault(Object kmsAccessDeniedFault) {
        this.kmsAccessDeniedFault = kmsAccessDeniedFault;
        return this;
    }
    public Object kmsDisabledFault;
    public StartReplicationTaskAssessmentRunResponse withKmsDisabledFault(Object kmsDisabledFault) {
        this.kmsDisabledFault = kmsDisabledFault;
        return this;
    }
    public Object kmsFault;
    public StartReplicationTaskAssessmentRunResponse withKmsFault(Object kmsFault) {
        this.kmsFault = kmsFault;
        return this;
    }
    public Object kmsInvalidStateFault;
    public StartReplicationTaskAssessmentRunResponse withKmsInvalidStateFault(Object kmsInvalidStateFault) {
        this.kmsInvalidStateFault = kmsInvalidStateFault;
        return this;
    }
    public Object kmsKeyNotAccessibleFault;
    public StartReplicationTaskAssessmentRunResponse withKmsKeyNotAccessibleFault(Object kmsKeyNotAccessibleFault) {
        this.kmsKeyNotAccessibleFault = kmsKeyNotAccessibleFault;
        return this;
    }
    public Object kmsNotFoundFault;
    public StartReplicationTaskAssessmentRunResponse withKmsNotFoundFault(Object kmsNotFoundFault) {
        this.kmsNotFoundFault = kmsNotFoundFault;
        return this;
    }
    public Object resourceAlreadyExistsFault;
    public StartReplicationTaskAssessmentRunResponse withResourceAlreadyExistsFault(Object resourceAlreadyExistsFault) {
        this.resourceAlreadyExistsFault = resourceAlreadyExistsFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public StartReplicationTaskAssessmentRunResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Object s3AccessDeniedFault;
    public StartReplicationTaskAssessmentRunResponse withS3AccessDeniedFault(Object s3AccessDeniedFault) {
        this.s3AccessDeniedFault = s3AccessDeniedFault;
        return this;
    }
    public Object s3ResourceNotFoundFault;
    public StartReplicationTaskAssessmentRunResponse withS3ResourceNotFoundFault(Object s3ResourceNotFoundFault) {
        this.s3ResourceNotFoundFault = s3ResourceNotFoundFault;
        return this;
    }
    public openapisdk.models.shared.StartReplicationTaskAssessmentRunResponse startReplicationTaskAssessmentRunResponse;
    public StartReplicationTaskAssessmentRunResponse withStartReplicationTaskAssessmentRunResponse(openapisdk.models.shared.StartReplicationTaskAssessmentRunResponse startReplicationTaskAssessmentRunResponse) {
        this.startReplicationTaskAssessmentRunResponse = startReplicationTaskAssessmentRunResponse;
        return this;
    }
    public Long statusCode;
    public StartReplicationTaskAssessmentRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}