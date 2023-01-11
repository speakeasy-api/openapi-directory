package openapisdk.models.shared;



/**
 * SupportedTimezonesList
 * A time zone associated with a <code>DBInstance</code> or a <code>DBSnapshot</code>. This data type is an element in the response to the <code>DescribeDBInstances</code>, the <code>DescribeDBSnapshots</code>, and the <code>DescribeDBEngineVersions</code> actions. 
**/
public class SupportedTimezonesList {
    public String timezoneName;
    public SupportedTimezonesList withTimezoneName(String timezoneName) {
        this.timezoneName = timezoneName;
        return this;
    }
}