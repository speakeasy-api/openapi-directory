import { SpeakeasyBase } from "../../../internal/utils";
import { ExtensionStatusEnum } from "./extensionstatusenum";
/**
 * Staging information related to source server.
 */
export declare class StagingArea extends SpeakeasyBase {
    errorMessage?: string;
    stagingAccountID?: string;
    stagingSourceServerArn?: string;
    status?: ExtensionStatusEnum;
}
