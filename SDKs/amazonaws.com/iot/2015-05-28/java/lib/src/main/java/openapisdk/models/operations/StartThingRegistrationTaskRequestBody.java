package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartThingRegistrationTaskRequestBody {
    @JsonProperty("inputFileBucket")
    public String inputFileBucket;
    public StartThingRegistrationTaskRequestBody withInputFileBucket(String inputFileBucket) {
        this.inputFileBucket = inputFileBucket;
        return this;
    }
    @JsonProperty("inputFileKey")
    public String inputFileKey;
    public StartThingRegistrationTaskRequestBody withInputFileKey(String inputFileKey) {
        this.inputFileKey = inputFileKey;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public StartThingRegistrationTaskRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("templateBody")
    public String templateBody;
    public StartThingRegistrationTaskRequestBody withTemplateBody(String templateBody) {
        this.templateBody = templateBody;
        return this;
    }
}