import { SpeakeasyBase } from "../../../internal/utils";
import { DBSecurityGroup } from "./dbsecuritygroup";
/**
 * Success
 */
export declare class AuthorizeDBSecurityGroupIngressResult extends SpeakeasyBase {
    /**
     * <p>Contains the details for an Amazon RDS DB security group.</p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action.</p>
     */
    dbSecurityGroup?: DBSecurityGroup;
}
