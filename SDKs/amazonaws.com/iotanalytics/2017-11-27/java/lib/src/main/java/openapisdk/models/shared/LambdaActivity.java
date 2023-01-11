package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaActivity
 * An activity that runs a Lambda function to modify the message.
**/
public class LambdaActivity {
    @JsonProperty("batchSize")
    public Long batchSize;
    public LambdaActivity withBatchSize(Long batchSize) {
        this.batchSize = batchSize;
        return this;
    }
    @JsonProperty("lambdaName")
    public String lambdaName;
    public LambdaActivity withLambdaName(String lambdaName) {
        this.lambdaName = lambdaName;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public LambdaActivity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public LambdaActivity withNext(String next) {
        this.next = next;
        return this;
    }
}