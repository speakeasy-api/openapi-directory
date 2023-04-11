import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityResolutionJob } from "./identityresolutionjob";
/**
 * Success
 */
export declare class ListIdentityResolutionJobsResponse extends SpeakeasyBase {
    identityResolutionJobsList?: IdentityResolutionJob[];
    nextToken?: string;
}
