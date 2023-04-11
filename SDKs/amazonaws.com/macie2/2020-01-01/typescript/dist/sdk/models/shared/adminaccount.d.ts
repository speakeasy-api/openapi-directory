import { SpeakeasyBase } from "../../../internal/utils";
import { AdminStatusEnum } from "./adminstatusenum";
/**
 * Provides information about the delegated Amazon Macie administrator account for an organization in Organizations.
 */
export declare class AdminAccount extends SpeakeasyBase {
    accountId?: string;
    status?: AdminStatusEnum;
}
