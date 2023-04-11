import { SpeakeasyBase } from "../../../internal/utils";
import { AccountHealth } from "./accounthealth";
import { CloudFormationHealth } from "./cloudformationhealth";
import { ServiceHealth } from "./servicehealth";
import { TagHealth } from "./taghealth";
/**
 * Success
 */
export declare class DescribeOrganizationResourceCollectionHealthResponse extends SpeakeasyBase {
    account?: AccountHealth[];
    cloudFormation?: CloudFormationHealth[];
    nextToken?: string;
    service?: ServiceHealth[];
    tags?: TagHealth[];
}
