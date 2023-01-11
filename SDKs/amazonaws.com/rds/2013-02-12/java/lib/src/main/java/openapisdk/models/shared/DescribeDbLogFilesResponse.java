package openapisdk.models.shared;



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