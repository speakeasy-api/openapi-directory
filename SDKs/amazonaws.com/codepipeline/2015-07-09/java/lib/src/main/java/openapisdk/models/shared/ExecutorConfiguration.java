package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExecutorConfiguration
 * The action engine, or executor, related to the supported integration model used to create and update the action type. The available executor types are <code>Lambda</code> and <code>JobWorker</code>.
**/
public class ExecutorConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobWorkerExecutorConfiguration")
    public JobWorkerExecutorConfiguration jobWorkerExecutorConfiguration;
    public ExecutorConfiguration withJobWorkerExecutorConfiguration(JobWorkerExecutorConfiguration jobWorkerExecutorConfiguration) {
        this.jobWorkerExecutorConfiguration = jobWorkerExecutorConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaExecutorConfiguration")
    public LambdaExecutorConfiguration lambdaExecutorConfiguration;
    public ExecutorConfiguration withLambdaExecutorConfiguration(LambdaExecutorConfiguration lambdaExecutorConfiguration) {
        this.lambdaExecutorConfiguration = lambdaExecutorConfiguration;
        return this;
    }
}