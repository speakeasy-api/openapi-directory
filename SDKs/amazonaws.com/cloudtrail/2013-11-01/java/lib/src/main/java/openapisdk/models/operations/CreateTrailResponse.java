package openapisdk.models.operations;



public class CreateTrailResponse {
    public Object cloudTrailAccessNotEnabledException;
    public CreateTrailResponse withCloudTrailAccessNotEnabledException(Object cloudTrailAccessNotEnabledException) {
        this.cloudTrailAccessNotEnabledException = cloudTrailAccessNotEnabledException;
        return this;
    }
    public Object cloudTrailInvalidClientTokenIdException;
    public CreateTrailResponse withCloudTrailInvalidClientTokenIdException(Object cloudTrailInvalidClientTokenIdException) {
        this.cloudTrailInvalidClientTokenIdException = cloudTrailInvalidClientTokenIdException;
        return this;
    }
    public Object cloudWatchLogsDeliveryUnavailableException;
    public CreateTrailResponse withCloudWatchLogsDeliveryUnavailableException(Object cloudWatchLogsDeliveryUnavailableException) {
        this.cloudWatchLogsDeliveryUnavailableException = cloudWatchLogsDeliveryUnavailableException;
        return this;
    }
    public String contentType;
    public CreateTrailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTrailResponse createTrailResponse;
    public CreateTrailResponse withCreateTrailResponse(openapisdk.models.shared.CreateTrailResponse createTrailResponse) {
        this.createTrailResponse = createTrailResponse;
        return this;
    }
    public Object insufficientDependencyServiceAccessPermissionException;
    public CreateTrailResponse withInsufficientDependencyServiceAccessPermissionException(Object insufficientDependencyServiceAccessPermissionException) {
        this.insufficientDependencyServiceAccessPermissionException = insufficientDependencyServiceAccessPermissionException;
        return this;
    }
    public Object insufficientEncryptionPolicyException;
    public CreateTrailResponse withInsufficientEncryptionPolicyException(Object insufficientEncryptionPolicyException) {
        this.insufficientEncryptionPolicyException = insufficientEncryptionPolicyException;
        return this;
    }
    public Object insufficientS3BucketPolicyException;
    public CreateTrailResponse withInsufficientS3BucketPolicyException(Object insufficientS3BucketPolicyException) {
        this.insufficientS3BucketPolicyException = insufficientS3BucketPolicyException;
        return this;
    }
    public Object insufficientSnsTopicPolicyException;
    public CreateTrailResponse withInsufficientSnsTopicPolicyException(Object insufficientSnsTopicPolicyException) {
        this.insufficientSnsTopicPolicyException = insufficientSnsTopicPolicyException;
        return this;
    }
    public Object invalidCloudWatchLogsLogGroupArnException;
    public CreateTrailResponse withInvalidCloudWatchLogsLogGroupArnException(Object invalidCloudWatchLogsLogGroupArnException) {
        this.invalidCloudWatchLogsLogGroupArnException = invalidCloudWatchLogsLogGroupArnException;
        return this;
    }
    public Object invalidCloudWatchLogsRoleArnException;
    public CreateTrailResponse withInvalidCloudWatchLogsRoleArnException(Object invalidCloudWatchLogsRoleArnException) {
        this.invalidCloudWatchLogsRoleArnException = invalidCloudWatchLogsRoleArnException;
        return this;
    }
    public Object invalidKmsKeyIdException;
    public CreateTrailResponse withInvalidKmsKeyIdException(Object invalidKmsKeyIdException) {
        this.invalidKmsKeyIdException = invalidKmsKeyIdException;
        return this;
    }
    public Object invalidParameterCombinationException;
    public CreateTrailResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidS3BucketNameException;
    public CreateTrailResponse withInvalidS3BucketNameException(Object invalidS3BucketNameException) {
        this.invalidS3BucketNameException = invalidS3BucketNameException;
        return this;
    }
    public Object invalidS3PrefixException;
    public CreateTrailResponse withInvalidS3PrefixException(Object invalidS3PrefixException) {
        this.invalidS3PrefixException = invalidS3PrefixException;
        return this;
    }
    public Object invalidSnsTopicNameException;
    public CreateTrailResponse withInvalidSnsTopicNameException(Object invalidSnsTopicNameException) {
        this.invalidSnsTopicNameException = invalidSnsTopicNameException;
        return this;
    }
    public Object invalidTagParameterException;
    public CreateTrailResponse withInvalidTagParameterException(Object invalidTagParameterException) {
        this.invalidTagParameterException = invalidTagParameterException;
        return this;
    }
    public Object invalidTrailNameException;
    public CreateTrailResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public Object kmsException;
    public CreateTrailResponse withKmsException(Object kmsException) {
        this.kmsException = kmsException;
        return this;
    }
    public Object kmsKeyDisabledException;
    public CreateTrailResponse withKmsKeyDisabledException(Object kmsKeyDisabledException) {
        this.kmsKeyDisabledException = kmsKeyDisabledException;
        return this;
    }
    public Object kmsKeyNotFoundException;
    public CreateTrailResponse withKmsKeyNotFoundException(Object kmsKeyNotFoundException) {
        this.kmsKeyNotFoundException = kmsKeyNotFoundException;
        return this;
    }
    public Object maximumNumberOfTrailsExceededException;
    public CreateTrailResponse withMaximumNumberOfTrailsExceededException(Object maximumNumberOfTrailsExceededException) {
        this.maximumNumberOfTrailsExceededException = maximumNumberOfTrailsExceededException;
        return this;
    }
    public Object notOrganizationMasterAccountException;
    public CreateTrailResponse withNotOrganizationMasterAccountException(Object notOrganizationMasterAccountException) {
        this.notOrganizationMasterAccountException = notOrganizationMasterAccountException;
        return this;
    }
    public Object operationNotPermittedException;
    public CreateTrailResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object organizationNotInAllFeaturesModeException;
    public CreateTrailResponse withOrganizationNotInAllFeaturesModeException(Object organizationNotInAllFeaturesModeException) {
        this.organizationNotInAllFeaturesModeException = organizationNotInAllFeaturesModeException;
        return this;
    }
    public Object organizationsNotInUseException;
    public CreateTrailResponse withOrganizationsNotInUseException(Object organizationsNotInUseException) {
        this.organizationsNotInUseException = organizationsNotInUseException;
        return this;
    }
    public Object s3BucketDoesNotExistException;
    public CreateTrailResponse withS3BucketDoesNotExistException(Object s3BucketDoesNotExistException) {
        this.s3BucketDoesNotExistException = s3BucketDoesNotExistException;
        return this;
    }
    public Long statusCode;
    public CreateTrailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object trailAlreadyExistsException;
    public CreateTrailResponse withTrailAlreadyExistsException(Object trailAlreadyExistsException) {
        this.trailAlreadyExistsException = trailAlreadyExistsException;
        return this;
    }
    public Object trailNotProvidedException;
    public CreateTrailResponse withTrailNotProvidedException(Object trailNotProvidedException) {
        this.trailNotProvidedException = trailNotProvidedException;
        return this;
    }
    public Object unsupportedOperationException;
    public CreateTrailResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}