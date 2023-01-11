package openapisdk.models.shared;



/**
 * SourceRegionMessage
 * Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.
**/
public class SourceRegionMessage {
    public String marker;
    public SourceRegionMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public SourceRegionList[] sourceRegions;
    public SourceRegionMessage withSourceRegions(SourceRegionList[] sourceRegions) {
        this.sourceRegions = sourceRegions;
        return this;
    }
}