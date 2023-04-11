import { SpeakeasyBase } from "../../../internal/utils";
import { ServerDetail } from "./serverdetail";
/**
 * Success
 */
export declare class ListServersResponse extends SpeakeasyBase {
    nextToken?: string;
    serverInfos?: ServerDetail[];
}
