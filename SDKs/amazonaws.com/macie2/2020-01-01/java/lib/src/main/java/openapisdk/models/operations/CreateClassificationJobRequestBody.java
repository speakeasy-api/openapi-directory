package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateClassificationJobRequestBody {
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateClassificationJobRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customDataIdentifierIds")
    public String[] customDataIdentifierIds;
    public CreateClassificationJobRequestBody withCustomDataIdentifierIds(String[] customDataIdentifierIds) {
        this.customDataIdentifierIds = customDataIdentifierIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateClassificationJobRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialRun")
    public Boolean initialRun;
    public CreateClassificationJobRequestBody withInitialRun(Boolean initialRun) {
        this.initialRun = initialRun;
        return this;
    }
    @JsonProperty("jobType")
    public CreateClassificationJobRequestBodyJobTypeEnum jobType;
    public CreateClassificationJobRequestBody withJobType(CreateClassificationJobRequestBodyJobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedDataIdentifierIds")
    public String[] managedDataIdentifierIds;
    public CreateClassificationJobRequestBody withManagedDataIdentifierIds(String[] managedDataIdentifierIds) {
        this.managedDataIdentifierIds = managedDataIdentifierIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedDataIdentifierSelector")
    public CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum managedDataIdentifierSelector;
    public CreateClassificationJobRequestBody withManagedDataIdentifierSelector(CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum managedDataIdentifierSelector) {
        this.managedDataIdentifierSelector = managedDataIdentifierSelector;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateClassificationJobRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("s3JobDefinition")
    public CreateClassificationJobRequestBodyS3JobDefinition s3JobDefinition;
    public CreateClassificationJobRequestBody withS3JobDefinition(CreateClassificationJobRequestBodyS3JobDefinition s3JobDefinition) {
        this.s3JobDefinition = s3JobDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samplingPercentage")
    public Long samplingPercentage;
    public CreateClassificationJobRequestBody withSamplingPercentage(Long samplingPercentage) {
        this.samplingPercentage = samplingPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleFrequency")
    public CreateClassificationJobRequestBodyScheduleFrequency scheduleFrequency;
    public CreateClassificationJobRequestBody withScheduleFrequency(CreateClassificationJobRequestBodyScheduleFrequency scheduleFrequency) {
        this.scheduleFrequency = scheduleFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateClassificationJobRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}