import { SpeakeasyBase } from "../../../internal/utils";
import { SSEStatusEnum } from "./ssestatusenum";
/**
 * The description of the server-side encryption status on the specified DAX cluster.
 */
export declare class SSEDescription extends SpeakeasyBase {
    status?: SSEStatusEnum;
}
