package openapisdk.models.operations;



public class ListApplicationRevisionsResponse {
    public Object applicationDoesNotExistException;
    public ListApplicationRevisionsResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object applicationNameRequiredException;
    public ListApplicationRevisionsResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public Object bucketNameFilterRequiredException;
    public ListApplicationRevisionsResponse withBucketNameFilterRequiredException(Object bucketNameFilterRequiredException) {
        this.bucketNameFilterRequiredException = bucketNameFilterRequiredException;
        return this;
    }
    public String contentType;
    public ListApplicationRevisionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidApplicationNameException;
    public ListApplicationRevisionsResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Object invalidBucketNameFilterException;
    public ListApplicationRevisionsResponse withInvalidBucketNameFilterException(Object invalidBucketNameFilterException) {
        this.invalidBucketNameFilterException = invalidBucketNameFilterException;
        return this;
    }
    public Object invalidDeployedStateFilterException;
    public ListApplicationRevisionsResponse withInvalidDeployedStateFilterException(Object invalidDeployedStateFilterException) {
        this.invalidDeployedStateFilterException = invalidDeployedStateFilterException;
        return this;
    }
    public Object invalidKeyPrefixFilterException;
    public ListApplicationRevisionsResponse withInvalidKeyPrefixFilterException(Object invalidKeyPrefixFilterException) {
        this.invalidKeyPrefixFilterException = invalidKeyPrefixFilterException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListApplicationRevisionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidSortByException;
    public ListApplicationRevisionsResponse withInvalidSortByException(Object invalidSortByException) {
        this.invalidSortByException = invalidSortByException;
        return this;
    }
    public Object invalidSortOrderException;
    public ListApplicationRevisionsResponse withInvalidSortOrderException(Object invalidSortOrderException) {
        this.invalidSortOrderException = invalidSortOrderException;
        return this;
    }
    public openapisdk.models.shared.ListApplicationRevisionsOutput listApplicationRevisionsOutput;
    public ListApplicationRevisionsResponse withListApplicationRevisionsOutput(openapisdk.models.shared.ListApplicationRevisionsOutput listApplicationRevisionsOutput) {
        this.listApplicationRevisionsOutput = listApplicationRevisionsOutput;
        return this;
    }
    public Long statusCode;
    public ListApplicationRevisionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}