package openapisdk.models.operations;



public class PutConfigurationRecorderResponse {
    public String contentType;
    public PutConfigurationRecorderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidConfigurationRecorderNameException;
    public PutConfigurationRecorderResponse withInvalidConfigurationRecorderNameException(Object invalidConfigurationRecorderNameException) {
        this.invalidConfigurationRecorderNameException = invalidConfigurationRecorderNameException;
        return this;
    }
    public Object invalidRecordingGroupException;
    public PutConfigurationRecorderResponse withInvalidRecordingGroupException(Object invalidRecordingGroupException) {
        this.invalidRecordingGroupException = invalidRecordingGroupException;
        return this;
    }
    public Object invalidRoleException;
    public PutConfigurationRecorderResponse withInvalidRoleException(Object invalidRoleException) {
        this.invalidRoleException = invalidRoleException;
        return this;
    }
    public Object maxNumberOfConfigurationRecordersExceededException;
    public PutConfigurationRecorderResponse withMaxNumberOfConfigurationRecordersExceededException(Object maxNumberOfConfigurationRecordersExceededException) {
        this.maxNumberOfConfigurationRecordersExceededException = maxNumberOfConfigurationRecordersExceededException;
        return this;
    }
    public Long statusCode;
    public PutConfigurationRecorderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}