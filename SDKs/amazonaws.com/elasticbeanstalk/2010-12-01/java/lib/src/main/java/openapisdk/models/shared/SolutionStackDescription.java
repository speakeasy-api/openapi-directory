package openapisdk.models.shared;



/**
 * SolutionStackDescription
 * Describes the solution stack.
**/
public class SolutionStackDescription {
    public String[] permittedFileTypes;
    public SolutionStackDescription withPermittedFileTypes(String[] permittedFileTypes) {
        this.permittedFileTypes = permittedFileTypes;
        return this;
    }
    public String solutionStackName;
    public SolutionStackDescription withSolutionStackName(String solutionStackName) {
        this.solutionStackName = solutionStackName;
        return this;
    }
}