import { SpeakeasyBase } from "../../../internal/utils";
import { Studio } from "./studio";
/**
 * Success
 */
export declare class ListStudiosResponse extends SpeakeasyBase {
    nextToken?: string;
    studios: Studio[];
}
