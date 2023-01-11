package openapisdk.models.shared;



/**
 * TestResult
 * Contains the result of testing a CloudFront function with <code>TestFunction</code>.
**/
public class TestResult {
    public String computeUtilization;
    public TestResult withComputeUtilization(String computeUtilization) {
        this.computeUtilization = computeUtilization;
        return this;
    }
    public String functionErrorMessage;
    public TestResult withFunctionErrorMessage(String functionErrorMessage) {
        this.functionErrorMessage = functionErrorMessage;
        return this;
    }
    public String[] functionExecutionLogs;
    public TestResult withFunctionExecutionLogs(String[] functionExecutionLogs) {
        this.functionExecutionLogs = functionExecutionLogs;
        return this;
    }
    public String functionOutput;
    public TestResult withFunctionOutput(String functionOutput) {
        this.functionOutput = functionOutput;
        return this;
    }
    public FunctionSummary functionSummary;
    public TestResult withFunctionSummary(FunctionSummary functionSummary) {
        this.functionSummary = functionSummary;
        return this;
    }
}