import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDropletBackupsPathParams extends SpeakeasyBase {
    dropletId: number;
}
export declare class ListDropletBackupsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare enum ListDropletBackups200ApplicationJsonBackupsTypeEnum {
    Snapshot = "snapshot",
    Backup = "backup"
}
export declare class ListDropletBackups200ApplicationJsonBackups extends SpeakeasyBase {
    createdAt: Date;
    id: number;
    minDiskSize: number;
    name: string;
    regions: string[];
    sizeGigabytes: number;
    type: ListDropletBackups200ApplicationJsonBackupsTypeEnum;
}
export declare class ListDropletBackups200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListDropletBackups200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListDropletBackups200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListDropletBackups200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListDropletBackups200ApplicationJson extends SpeakeasyBase {
    backups?: ListDropletBackups200ApplicationJsonBackups[];
    links?: ListDropletBackups200ApplicationJsonLinks;
    meta: ListDropletBackups200ApplicationJsonMeta;
}
export declare class ListDropletBackups401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDropletBackupsRequest extends SpeakeasyBase {
    pathParams: ListDropletBackupsPathParams;
    queryParams: ListDropletBackupsQueryParams;
}
export declare class ListDropletBackupsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDropletBackups200ApplicationJSONObject?: ListDropletBackups200ApplicationJson;
    listDropletBackups401ApplicationJSONObject?: ListDropletBackups401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
