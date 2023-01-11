package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContinueAsNewWorkflowExecutionDecisionAttributes
 * <p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tag</code> – A tag used to identify the workflow execution</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
**/
public class ContinueAsNewWorkflowExecutionDecisionAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childPolicy")
    public ChildPolicyEnum childPolicy;
    public ContinueAsNewWorkflowExecutionDecisionAttributes withChildPolicy(ChildPolicyEnum childPolicy) {
        this.childPolicy = childPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionStartToCloseTimeout")
    public String executionStartToCloseTimeout;
    public ContinueAsNewWorkflowExecutionDecisionAttributes withExecutionStartToCloseTimeout(String executionStartToCloseTimeout) {
        this.executionStartToCloseTimeout = executionStartToCloseTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public ContinueAsNewWorkflowExecutionDecisionAttributes withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaRole")
    public String lambdaRole;
    public ContinueAsNewWorkflowExecutionDecisionAttributes withLambdaRole(String lambdaRole) {
        this.lambdaRole = lambdaRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagList")
    public String[] tagList;
    public ContinueAsNewWorkflowExecutionDecisionAttributes withTagList(String[] tagList) {
        this.tagList = tagList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskList")
    public TaskList taskList;
    public ContinueAsNewWorkflowExecutionDecisionAttributes withTaskList(TaskList taskList) {
        this.taskList = taskList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskPriority")
    public String taskPriority;
    public ContinueAsNewWorkflowExecutionDecisionAttributes withTaskPriority(String taskPriority) {
        this.taskPriority = taskPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskStartToCloseTimeout")
    public String taskStartToCloseTimeout;
    public ContinueAsNewWorkflowExecutionDecisionAttributes withTaskStartToCloseTimeout(String taskStartToCloseTimeout) {
        this.taskStartToCloseTimeout = taskStartToCloseTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflowTypeVersion")
    public String workflowTypeVersion;
    public ContinueAsNewWorkflowExecutionDecisionAttributes withWorkflowTypeVersion(String workflowTypeVersion) {
        this.workflowTypeVersion = workflowTypeVersion;
        return this;
    }
}