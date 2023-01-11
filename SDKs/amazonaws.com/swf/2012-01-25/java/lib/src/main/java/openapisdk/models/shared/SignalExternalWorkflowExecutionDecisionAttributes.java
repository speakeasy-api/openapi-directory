package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SignalExternalWorkflowExecutionDecisionAttributes
 * <p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
**/
public class SignalExternalWorkflowExecutionDecisionAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control")
    public String control;
    public SignalExternalWorkflowExecutionDecisionAttributes withControl(String control) {
        this.control = control;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public String input;
    public SignalExternalWorkflowExecutionDecisionAttributes withInput(String input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runId")
    public String runId;
    public SignalExternalWorkflowExecutionDecisionAttributes withRunId(String runId) {
        this.runId = runId;
        return this;
    }
    @JsonProperty("signalName")
    public String signalName;
    public SignalExternalWorkflowExecutionDecisionAttributes withSignalName(String signalName) {
        this.signalName = signalName;
        return this;
    }
    @JsonProperty("workflowId")
    public String workflowId;
    public SignalExternalWorkflowExecutionDecisionAttributes withWorkflowId(String workflowId) {
        this.workflowId = workflowId;
        return this;
    }
}