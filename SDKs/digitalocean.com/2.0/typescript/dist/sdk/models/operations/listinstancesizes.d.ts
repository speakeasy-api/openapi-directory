import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListInstanceSizes200ApplicationJsonInstanceSizesSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum {
    Unspecified = "UNSPECIFIED",
    Shared = "SHARED",
    Dedicated = "DEDICATED"
}
export declare class ListInstanceSizes200ApplicationJsonInstanceSizes extends SpeakeasyBase {
    cpuType?: ListInstanceSizes200ApplicationJsonInstanceSizesSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum;
    cpus?: string;
    memoryBytes?: string;
    name?: string;
    slug?: string;
    tierDowngradeTo?: string;
    tierSlug?: string;
    tierUpgradeTo?: string;
    usdPerMonth?: string;
    usdPerSecond?: string;
}
export declare class ListInstanceSizes200ApplicationJson extends SpeakeasyBase {
    discountPercent?: number;
    instanceSizes?: ListInstanceSizes200ApplicationJsonInstanceSizes[];
}
export declare class ListInstanceSizes401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListInstanceSizesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listInstanceSizes200ApplicationJSONObject?: ListInstanceSizes200ApplicationJson;
    listInstanceSizes401ApplicationJSONObject?: ListInstanceSizes401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
