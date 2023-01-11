package openapisdk.models.shared;



/**
 * EvaluationResult
 * <p>Contains the results of a simulation.</p> <p>This data type is used by the return parameter of <code> <a>SimulateCustomPolicy</a> </code> and <code> <a>SimulatePrincipalPolicy</a> </code>.</p>
**/
public class EvaluationResult {
    public String evalActionName;
    public EvaluationResult withEvalActionName(String evalActionName) {
        this.evalActionName = evalActionName;
        return this;
    }
    public PolicyEvaluationDecisionTypeEnum evalDecision;
    public EvaluationResult withEvalDecision(PolicyEvaluationDecisionTypeEnum evalDecision) {
        this.evalDecision = evalDecision;
        return this;
    }
    public java.util.Map<String, String> evalDecisionDetails;
    public EvaluationResult withEvalDecisionDetails(java.util.Map<String, String> evalDecisionDetails) {
        this.evalDecisionDetails = evalDecisionDetails;
        return this;
    }
    public String evalResourceName;
    public EvaluationResult withEvalResourceName(String evalResourceName) {
        this.evalResourceName = evalResourceName;
        return this;
    }
    public Statement[] matchedStatements;
    public EvaluationResult withMatchedStatements(Statement[] matchedStatements) {
        this.matchedStatements = matchedStatements;
        return this;
    }
    public String[] missingContextValues;
    public EvaluationResult withMissingContextValues(String[] missingContextValues) {
        this.missingContextValues = missingContextValues;
        return this;
    }
    public OrganizationsDecisionDetail organizationsDecisionDetail;
    public EvaluationResult withOrganizationsDecisionDetail(OrganizationsDecisionDetail organizationsDecisionDetail) {
        this.organizationsDecisionDetail = organizationsDecisionDetail;
        return this;
    }
    public PermissionsBoundaryDecisionDetail permissionsBoundaryDecisionDetail;
    public EvaluationResult withPermissionsBoundaryDecisionDetail(PermissionsBoundaryDecisionDetail permissionsBoundaryDecisionDetail) {
        this.permissionsBoundaryDecisionDetail = permissionsBoundaryDecisionDetail;
        return this;
    }
    public ResourceSpecificResult[] resourceSpecificResults;
    public EvaluationResult withResourceSpecificResults(ResourceSpecificResult[] resourceSpecificResults) {
        this.resourceSpecificResults = resourceSpecificResults;
        return this;
    }
}