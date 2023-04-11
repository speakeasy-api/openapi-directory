import { SpeakeasyBase } from "../../../internal/utils";
import { UserFileKeySetRequest } from "./userfilekeysetrequest";
/**
 * List of request models for setting a user file key(s)
 */
export declare class UserFileKeySetBatchRequest extends SpeakeasyBase {
    /**
     * List of user file keys
     */
    items: UserFileKeySetRequest[];
}
