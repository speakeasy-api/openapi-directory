import { SpeakeasyBase } from "../../../internal/utils";
import { AllowListCriteria } from "./allowlistcriteria";
import { AllowListStatus } from "./allowliststatus";
/**
 * Success
 */
export declare class GetAllowListResponse extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    criteria?: AllowListCriteria;
    description?: string;
    id?: string;
    name?: string;
    status?: AllowListStatus;
    tags?: Record<string, string>;
    updatedAt?: Date;
}
