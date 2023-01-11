package openapisdk.models.shared;



/**
 * DescribeDbLogFilesResponse
 *  The response from a call to <code>DescribeDBLogFiles</code>. 
**/
public class DescribeDbLogFilesResponse {
    public DescribeDbLogFilesList[] describeDBLogFiles;
    public DescribeDbLogFilesResponse withDescribeDbLogFiles(DescribeDbLogFilesList[] describeDBLogFiles) {
        this.describeDBLogFiles = describeDBLogFiles;
        return this;
    }
    public String marker;
    public DescribeDbLogFilesResponse withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}