import { SpeakeasyBase } from "../../../internal/utils";
import { SSEStatusEnum } from "./ssestatusenum";
import { SSETypeEnum } from "./ssetypeenum";
/**
 * The description of the server-side encryption status on the specified table.
 */
export declare class SSEDescription extends SpeakeasyBase {
    inaccessibleEncryptionDateTime?: Date;
    kmsMasterKeyArn?: string;
    sseType?: SSETypeEnum;
    status?: SSEStatusEnum;
}
