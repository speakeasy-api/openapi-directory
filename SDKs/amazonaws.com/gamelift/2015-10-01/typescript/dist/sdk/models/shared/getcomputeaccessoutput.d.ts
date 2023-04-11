import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCredentials } from "./awscredentials";
/**
 * Success
 */
export declare class GetComputeAccessOutput extends SpeakeasyBase {
    computeArn?: string;
    computeName?: string;
    credentials?: AwsCredentials;
    fleetArn?: string;
    fleetId?: string;
}
