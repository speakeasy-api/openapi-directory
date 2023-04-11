import { SpeakeasyBase } from "../../../internal/utils";
import { Finding } from "./finding";
/**
 * Success
 */
export declare class ListFindingsResponse extends SpeakeasyBase {
    findings?: Finding[];
    nextToken?: string;
}
