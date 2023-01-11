import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListInstanceSizes200ApplicationJsonInstanceSizesSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum {
    Unspecified = "UNSPECIFIED",
    Shared = "SHARED",
    Dedicated = "DEDICATED"
}


export class ListInstanceSizes200ApplicationJsonInstanceSizes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpu_type" })
  cpuType?: ListInstanceSizes200ApplicationJsonInstanceSizesSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum;

  @SpeakeasyMetadata({ data: "json, name=cpus" })
  cpus?: string;

  @SpeakeasyMetadata({ data: "json, name=memory_bytes" })
  memoryBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=tier_downgrade_to" })
  tierDowngradeTo?: string;

  @SpeakeasyMetadata({ data: "json, name=tier_slug" })
  tierSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=tier_upgrade_to" })
  tierUpgradeTo?: string;

  @SpeakeasyMetadata({ data: "json, name=usd_per_month" })
  usdPerMonth?: string;

  @SpeakeasyMetadata({ data: "json, name=usd_per_second" })
  usdPerSecond?: string;
}


export class ListInstanceSizes200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discount_percent" })
  discountPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=instance_sizes", elemType: ListInstanceSizes200ApplicationJsonInstanceSizes })
  instanceSizes?: ListInstanceSizes200ApplicationJsonInstanceSizes[];
}


export class ListInstanceSizes401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListInstanceSizesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listInstanceSizes200ApplicationJSONObject?: ListInstanceSizes200ApplicationJson;

  @SpeakeasyMetadata()
  listInstanceSizes401ApplicationJSONObject?: ListInstanceSizes401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
