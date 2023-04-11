import { SpeakeasyBase } from "../../../internal/utils";
import { FsxProtocol } from "./fsxprotocol";
/**
 * Success
 */
export declare class DescribeLocationFsxOpenZfsResponse extends SpeakeasyBase {
    creationTime?: Date;
    locationArn?: string;
    locationUri?: string;
    protocol?: FsxProtocol;
    securityGroupArns?: string[];
}
