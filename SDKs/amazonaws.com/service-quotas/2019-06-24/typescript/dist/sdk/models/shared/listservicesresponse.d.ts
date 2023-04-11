import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceInfo } from "./serviceinfo";
/**
 * Success
 */
export declare class ListServicesResponse extends SpeakeasyBase {
    nextToken?: string;
    services?: ServiceInfo[];
}
