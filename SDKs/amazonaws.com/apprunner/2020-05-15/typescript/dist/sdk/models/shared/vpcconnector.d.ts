import { SpeakeasyBase } from "../../../internal/utils";
import { VpcConnectorStatusEnum } from "./vpcconnectorstatusenum";
/**
 * <p>Describes an App Runner VPC connector resource. A VPC connector describes the Amazon Virtual Private Cloud (Amazon VPC) that an App Runner service is associated with, and the subnets and security group that are used.</p> <p>Multiple revisions of a connector might have the same <code>Name</code> and different <code>Revision</code> values.</p> <note> <p>At this time, App Runner supports only one revision per name.</p> </note>
 */
export declare class VpcConnector extends SpeakeasyBase {
    createdAt?: Date;
    deletedAt?: Date;
    securityGroups?: string[];
    status?: VpcConnectorStatusEnum;
    subnets?: string[];
    vpcConnectorArn?: string;
    vpcConnectorName?: string;
    vpcConnectorRevision?: number;
}
