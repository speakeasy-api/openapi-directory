package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TestRoleRequestBody {
    @JsonProperty("InputBucket")
    public String inputBucket;
    public TestRoleRequestBody withInputBucket(String inputBucket) {
        this.inputBucket = inputBucket;
        return this;
    }
    @JsonProperty("OutputBucket")
    public String outputBucket;
    public TestRoleRequestBody withOutputBucket(String outputBucket) {
        this.outputBucket = outputBucket;
        return this;
    }
    @JsonProperty("Role")
    public String role;
    public TestRoleRequestBody withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonProperty("Topics")
    public String[] topics;
    public TestRoleRequestBody withTopics(String[] topics) {
        this.topics = topics;
        return this;
    }
}