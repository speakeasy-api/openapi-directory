import { SpeakeasyBase } from "../../../internal/utils";
import { RouteRef } from "./routeref";
/**
 * Success
 */
export declare class ListRoutesOutput extends SpeakeasyBase {
    nextToken?: string;
    routes: RouteRef[];
}
