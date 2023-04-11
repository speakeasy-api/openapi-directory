import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceServerType } from "./resourceservertype";
/**
 * Success
 */
export declare class ListResourceServersResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceServers: ResourceServerType[];
}
