import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum {
    Unspecified = "UNSPECIFIED",
    Shared = "SHARED",
    Dedicated = "DEDICATED"
}


export class Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpu_type" })
  cpuType?: Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum;

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
