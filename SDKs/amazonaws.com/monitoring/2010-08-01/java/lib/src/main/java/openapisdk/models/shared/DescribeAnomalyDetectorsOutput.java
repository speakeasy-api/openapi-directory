package openapisdk.models.shared;



public class DescribeAnomalyDetectorsOutput {
    public AnomalyDetector[] anomalyDetectors;
    public DescribeAnomalyDetectorsOutput withAnomalyDetectors(AnomalyDetector[] anomalyDetectors) {
        this.anomalyDetectors = anomalyDetectors;
        return this;
    }
    public String nextToken;
    public DescribeAnomalyDetectorsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}