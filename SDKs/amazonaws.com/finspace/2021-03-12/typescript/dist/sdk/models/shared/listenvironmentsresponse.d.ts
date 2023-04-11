import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
/**
 * Success
 */
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    environments?: Environment[];
    nextToken?: string;
}
