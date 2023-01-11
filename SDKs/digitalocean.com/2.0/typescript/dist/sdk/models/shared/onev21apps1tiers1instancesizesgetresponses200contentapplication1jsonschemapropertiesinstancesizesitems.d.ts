import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum {
    Unspecified = "UNSPECIFIED",
    Shared = "SHARED",
    Dedicated = "DEDICATED"
}
export declare class Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItems extends SpeakeasyBase {
    cpuType?: Onev21apps1tiers1instanceSizesGetResponses200ContentApplication1jsonSchemaPropertiesInstanceSizesItemsSharedSharedVCpuCoresDedicatedDedicatedVCpuCoresEnum;
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
