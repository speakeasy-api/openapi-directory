import { SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationHealth } from "./cloudformationhealth";
import { ServiceHealth } from "./servicehealth";
import { TagHealth } from "./taghealth";
/**
 * Success
 */
export declare class DescribeResourceCollectionHealthResponse extends SpeakeasyBase {
    cloudFormation?: CloudFormationHealth[];
    nextToken?: string;
    service?: ServiceHealth[];
    tags?: TagHealth[];
}
