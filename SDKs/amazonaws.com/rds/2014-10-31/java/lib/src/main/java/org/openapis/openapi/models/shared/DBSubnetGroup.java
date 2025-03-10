/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * DBSubnetGroup - &lt;p&gt;Contains the details of an Amazon RDS DB subnet group.&lt;/p&gt; &lt;p&gt;This data type is used as a response element in the &lt;code&gt;DescribeDBSubnetGroups&lt;/code&gt; action.&lt;/p&gt;
 */
public class DBSubnetGroup {
    
    public String dbSubnetGroupArn;

    public DBSubnetGroup withDBSubnetGroupArn(String dbSubnetGroupArn) {
        this.dbSubnetGroupArn = dbSubnetGroupArn;
        return this;
    }
    
    
    public String dbSubnetGroupDescription;

    public DBSubnetGroup withDBSubnetGroupDescription(String dbSubnetGroupDescription) {
        this.dbSubnetGroupDescription = dbSubnetGroupDescription;
        return this;
    }
    
    
    public String dbSubnetGroupName;

    public DBSubnetGroup withDBSubnetGroupName(String dbSubnetGroupName) {
        this.dbSubnetGroupName = dbSubnetGroupName;
        return this;
    }
    
    
    public String subnetGroupStatus;

    public DBSubnetGroup withSubnetGroupStatus(String subnetGroupStatus) {
        this.subnetGroupStatus = subnetGroupStatus;
        return this;
    }
    
    
    public SubnetList[] subnets;

    public DBSubnetGroup withSubnets(SubnetList[] subnets) {
        this.subnets = subnets;
        return this;
    }
    
    
    public String[] supportedNetworkTypes;

    public DBSubnetGroup withSupportedNetworkTypes(String[] supportedNetworkTypes) {
        this.supportedNetworkTypes = supportedNetworkTypes;
        return this;
    }
    
    
    public String vpcId;

    public DBSubnetGroup withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    
    public DBSubnetGroup(){}
}
