package openapisdk.models.shared;



/**
 * ListDistributionsResult
 * The returned result of the corresponding request. 
**/
public class ListDistributionsResult {
    public DistributionList distributionList;
    public ListDistributionsResult withDistributionList(DistributionList distributionList) {
        this.distributionList = distributionList;
        return this;
    }
}