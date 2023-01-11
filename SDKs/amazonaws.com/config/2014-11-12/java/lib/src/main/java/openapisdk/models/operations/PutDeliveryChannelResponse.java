package openapisdk.models.operations;



public class PutDeliveryChannelResponse {
    public String contentType;
    public PutDeliveryChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientDeliveryPolicyException;
    public PutDeliveryChannelResponse withInsufficientDeliveryPolicyException(Object insufficientDeliveryPolicyException) {
        this.insufficientDeliveryPolicyException = insufficientDeliveryPolicyException;
        return this;
    }
    public Object invalidDeliveryChannelNameException;
    public PutDeliveryChannelResponse withInvalidDeliveryChannelNameException(Object invalidDeliveryChannelNameException) {
        this.invalidDeliveryChannelNameException = invalidDeliveryChannelNameException;
        return this;
    }
    public Object invalidS3KeyPrefixException;
    public PutDeliveryChannelResponse withInvalidS3KeyPrefixException(Object invalidS3KeyPrefixException) {
        this.invalidS3KeyPrefixException = invalidS3KeyPrefixException;
        return this;
    }
    public Object invalidS3KmsKeyArnException;
    public PutDeliveryChannelResponse withInvalidS3KmsKeyArnException(Object invalidS3KmsKeyArnException) {
        this.invalidS3KmsKeyArnException = invalidS3KmsKeyArnException;
        return this;
    }
    public Object invalidSNSTopicARNException;
    public PutDeliveryChannelResponse withInvalidSnsTopicArnException(Object invalidSNSTopicARNException) {
        this.invalidSNSTopicARNException = invalidSNSTopicARNException;
        return this;
    }
    public Object maxNumberOfDeliveryChannelsExceededException;
    public PutDeliveryChannelResponse withMaxNumberOfDeliveryChannelsExceededException(Object maxNumberOfDeliveryChannelsExceededException) {
        this.maxNumberOfDeliveryChannelsExceededException = maxNumberOfDeliveryChannelsExceededException;
        return this;
    }
    public Object noAvailableConfigurationRecorderException;
    public PutDeliveryChannelResponse withNoAvailableConfigurationRecorderException(Object noAvailableConfigurationRecorderException) {
        this.noAvailableConfigurationRecorderException = noAvailableConfigurationRecorderException;
        return this;
    }
    public Object noSuchBucketException;
    public PutDeliveryChannelResponse withNoSuchBucketException(Object noSuchBucketException) {
        this.noSuchBucketException = noSuchBucketException;
        return this;
    }
    public Long statusCode;
    public PutDeliveryChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}