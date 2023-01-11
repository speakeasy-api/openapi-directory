package openapisdk.models.shared;



/**
 * GlobalClusterMemberList
 * A data structure with information about any primary and secondary clusters associated with an Amazon DocumentDB global clusters. 
**/
public class GlobalClusterMemberList {
    public String dbClusterArn;
    public GlobalClusterMemberList withDbClusterArn(String dbClusterArn) {
        this.dbClusterArn = dbClusterArn;
        return this;
    }
    public Boolean isWriter;
    public GlobalClusterMemberList withIsWriter(Boolean isWriter) {
        this.isWriter = isWriter;
        return this;
    }
    public String[] readers;
    public GlobalClusterMemberList withReaders(String[] readers) {
        this.readers = readers;
        return this;
    }
}