import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigParameter } from "./configparameter";
import { Endpoint } from "./endpoint";
import { WorkgroupStatusEnum } from "./workgroupstatusenum";
/**
 * The collection of computing resources from which an endpoint is created.
 */
export declare class Workgroup extends SpeakeasyBase {
    baseCapacity?: number;
    configParameters?: ConfigParameter[];
    creationDate?: Date;
    endpoint?: Endpoint;
    enhancedVpcRouting?: boolean;
    namespaceName?: string;
    port?: number;
    publiclyAccessible?: boolean;
    securityGroupIds?: string[];
    status?: WorkgroupStatusEnum;
    subnetIds?: string[];
    workgroupArn?: string;
    workgroupId?: string;
    workgroupName?: string;
}
