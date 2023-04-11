import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSecurityFinding } from "./awssecurityfinding";
/**
 * Success
 */
export declare class GetFindingsResponse extends SpeakeasyBase {
    findings: AwsSecurityFinding[];
    nextToken?: string;
}
