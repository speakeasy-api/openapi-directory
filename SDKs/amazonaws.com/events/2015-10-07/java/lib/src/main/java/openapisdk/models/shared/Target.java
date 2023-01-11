package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Target
 * <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html">PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>
**/
public class Target {
    @JsonProperty("Arn")
    public String arn;
    public Target withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BatchParameters")
    public BatchParameters batchParameters;
    public Target withBatchParameters(BatchParameters batchParameters) {
        this.batchParameters = batchParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeadLetterConfig")
    public DeadLetterConfig deadLetterConfig;
    public Target withDeadLetterConfig(DeadLetterConfig deadLetterConfig) {
        this.deadLetterConfig = deadLetterConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EcsParameters")
    public EcsParameters ecsParameters;
    public Target withEcsParameters(EcsParameters ecsParameters) {
        this.ecsParameters = ecsParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HttpParameters")
    public HttpParameters httpParameters;
    public Target withHttpParameters(HttpParameters httpParameters) {
        this.httpParameters = httpParameters;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public Target withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Input")
    public String input;
    public Target withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputPath")
    public String inputPath;
    public Target withInputPath(String inputPath) {
        this.inputPath = inputPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputTransformer")
    public InputTransformer inputTransformer;
    public Target withInputTransformer(InputTransformer inputTransformer) {
        this.inputTransformer = inputTransformer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisParameters")
    public KinesisParameters kinesisParameters;
    public Target withKinesisParameters(KinesisParameters kinesisParameters) {
        this.kinesisParameters = kinesisParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedshiftDataParameters")
    public RedshiftDataParameters redshiftDataParameters;
    public Target withRedshiftDataParameters(RedshiftDataParameters redshiftDataParameters) {
        this.redshiftDataParameters = redshiftDataParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetryPolicy")
    public RetryPolicy retryPolicy;
    public Target withRetryPolicy(RetryPolicy retryPolicy) {
        this.retryPolicy = retryPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleArn")
    public String roleArn;
    public Target withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunCommandParameters")
    public RunCommandParameters runCommandParameters;
    public Target withRunCommandParameters(RunCommandParameters runCommandParameters) {
        this.runCommandParameters = runCommandParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SageMakerPipelineParameters")
    public SageMakerPipelineParameters sageMakerPipelineParameters;
    public Target withSageMakerPipelineParameters(SageMakerPipelineParameters sageMakerPipelineParameters) {
        this.sageMakerPipelineParameters = sageMakerPipelineParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SqsParameters")
    public SqsParameters sqsParameters;
    public Target withSqsParameters(SqsParameters sqsParameters) {
        this.sqsParameters = sqsParameters;
        return this;
    }
}