package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobData
 * Represents other information about a job required for a job worker to complete the job.
**/
public class JobData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionConfiguration")
    public ActionConfiguration actionConfiguration;
    public JobData withActionConfiguration(ActionConfiguration actionConfiguration) {
        this.actionConfiguration = actionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionTypeId")
    public ActionTypeId actionTypeId;
    public JobData withActionTypeId(ActionTypeId actionTypeId) {
        this.actionTypeId = actionTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactCredentials")
    public AwsSessionCredentials artifactCredentials;
    public JobData withArtifactCredentials(AwsSessionCredentials artifactCredentials) {
        this.artifactCredentials = artifactCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continuationToken")
    public String continuationToken;
    public JobData withContinuationToken(String continuationToken) {
        this.continuationToken = continuationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionKey")
    public EncryptionKey encryptionKey;
    public JobData withEncryptionKey(EncryptionKey encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputArtifacts")
    public Artifact[] inputArtifacts;
    public JobData withInputArtifacts(Artifact[] inputArtifacts) {
        this.inputArtifacts = inputArtifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputArtifacts")
    public Artifact[] outputArtifacts;
    public JobData withOutputArtifacts(Artifact[] outputArtifacts) {
        this.outputArtifacts = outputArtifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineContext")
    public PipelineContext pipelineContext;
    public JobData withPipelineContext(PipelineContext pipelineContext) {
        this.pipelineContext = pipelineContext;
        return this;
    }
}