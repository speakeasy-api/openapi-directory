import { SpeakeasyBase } from "../../../internal/utils";
import { TestGridSession } from "./testgridsession";
/**
 * Success
 */
export declare class ListTestGridSessionsResult extends SpeakeasyBase {
    nextToken?: string;
    testGridSessions?: TestGridSession[];
}
