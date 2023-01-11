import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of a organic search request
**/
export declare class OrganicResult extends SpeakeasyBase {
    count?: number;
    items?: Record<string, any>[];
    total?: number;
}
