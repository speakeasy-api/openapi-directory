import { SpeakeasyBase } from "../../../internal/utils";
import { Server } from "./server";
import { ServerCatalogStatusEnum } from "./servercatalogstatusenum";
/**
 * Success
 */
export declare class GetServersResponse extends SpeakeasyBase {
    lastModifiedOn?: Date;
    nextToken?: string;
    serverCatalogStatus?: ServerCatalogStatusEnum;
    serverList?: Server[];
}
