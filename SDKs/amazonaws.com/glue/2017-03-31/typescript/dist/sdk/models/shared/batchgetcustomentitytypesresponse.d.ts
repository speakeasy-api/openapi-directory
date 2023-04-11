import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEntityType } from "./customentitytype";
/**
 * Success
 */
export declare class BatchGetCustomEntityTypesResponse extends SpeakeasyBase {
    customEntityTypes?: CustomEntityType[];
    customEntityTypesNotFound?: string[];
}
