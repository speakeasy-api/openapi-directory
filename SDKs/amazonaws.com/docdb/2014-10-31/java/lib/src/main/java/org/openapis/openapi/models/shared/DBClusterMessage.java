/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * DBClusterMessage - Represents the output of &lt;a&gt;DescribeDBClusters&lt;/a&gt;.
 */
public class DBClusterMessage {
    
    public DBClusterList[] dbClusters;

    public DBClusterMessage withDBClusters(DBClusterList[] dbClusters) {
        this.dbClusters = dbClusters;
        return this;
    }
    
    
    public String marker;

    public DBClusterMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    
    public DBClusterMessage(){}
}
