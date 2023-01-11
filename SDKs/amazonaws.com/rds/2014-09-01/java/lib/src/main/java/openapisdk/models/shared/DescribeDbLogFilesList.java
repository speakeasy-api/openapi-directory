package openapisdk.models.shared;



public class DescribeDbLogFilesList {
    public Long lastWritten;
    public DescribeDbLogFilesList withLastWritten(Long lastWritten) {
        this.lastWritten = lastWritten;
        return this;
    }
    public String logFileName;
    public DescribeDbLogFilesList withLogFileName(String logFileName) {
        this.logFileName = logFileName;
        return this;
    }
    public Long size;
    public DescribeDbLogFilesList withSize(Long size) {
        this.size = size;
        return this;
    }
}