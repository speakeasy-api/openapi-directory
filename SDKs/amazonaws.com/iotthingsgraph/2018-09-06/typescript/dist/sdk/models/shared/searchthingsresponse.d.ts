import { SpeakeasyBase } from "../../../internal/utils";
import { Thing } from "./thing";
/**
 * Success
 */
export declare class SearchThingsResponse extends SpeakeasyBase {
    nextToken?: string;
    things?: Thing[];
}
