import { SpeakeasyBase } from "../../../internal/utils";
import { ServerOsTypeEnum } from "./serverostypeenum";
/**
 *  Object containing details about the servers imported by Application Discovery Service
 */
export declare class ServerSummary extends SpeakeasyBase {
    serverOsType?: ServerOsTypeEnum;
    count?: number;
}
