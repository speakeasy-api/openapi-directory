import { SpeakeasyBase } from "../../../internal/utils";
import { ApiMapping } from "./apimapping";
/**
 * Success
 */
export declare class GetApiMappingsResponse extends SpeakeasyBase {
    items?: ApiMapping[];
    nextToken?: string;
}
