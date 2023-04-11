import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEntityType } from "./customentitytype";
/**
 * Success
 */
export declare class ListCustomEntityTypesResponse extends SpeakeasyBase {
    customEntityTypes?: CustomEntityType[];
    nextToken?: string;
}
