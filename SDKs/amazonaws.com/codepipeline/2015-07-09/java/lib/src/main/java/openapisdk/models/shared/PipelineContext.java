package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PipelineContext
 * <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note>
**/
public class PipelineContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public ActionContext action;
    public PipelineContext withAction(ActionContext action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineArn")
    public String pipelineArn;
    public PipelineContext withPipelineArn(String pipelineArn) {
        this.pipelineArn = pipelineArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineExecutionId")
    public String pipelineExecutionId;
    public PipelineContext withPipelineExecutionId(String pipelineExecutionId) {
        this.pipelineExecutionId = pipelineExecutionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineName")
    public String pipelineName;
    public PipelineContext withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stage")
    public StageContext stage;
    public PipelineContext withStage(StageContext stage) {
        this.stage = stage;
        return this;
    }
}