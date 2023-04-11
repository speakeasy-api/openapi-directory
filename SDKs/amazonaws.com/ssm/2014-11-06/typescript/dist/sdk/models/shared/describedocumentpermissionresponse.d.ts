import { SpeakeasyBase } from "../../../internal/utils";
import { AccountSharingInfo } from "./accountsharinginfo";
/**
 * Success
 */
export declare class DescribeDocumentPermissionResponse extends SpeakeasyBase {
    accountIds?: string[];
    accountSharingInfoList?: AccountSharingInfo[];
    nextToken?: string;
}
