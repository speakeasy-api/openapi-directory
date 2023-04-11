import { SpeakeasyBase } from "../../../internal/utils";
import { AllowListStatusCodeEnum } from "./allowliststatuscodeenum";
/**
 * Provides information about the current status of an allow list, which indicates whether Amazon Macie can access and use the list's criteria.
 */
export declare class AllowListStatus extends SpeakeasyBase {
    code: AllowListStatusCodeEnum;
    description?: string;
}
