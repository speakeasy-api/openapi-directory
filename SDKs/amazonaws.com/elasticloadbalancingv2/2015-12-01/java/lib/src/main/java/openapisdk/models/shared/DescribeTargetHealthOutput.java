package openapisdk.models.shared;



public class DescribeTargetHealthOutput {
    public TargetHealthDescription[] targetHealthDescriptions;
    public DescribeTargetHealthOutput withTargetHealthDescriptions(TargetHealthDescription[] targetHealthDescriptions) {
        this.targetHealthDescriptions = targetHealthDescriptions;
        return this;
    }
}