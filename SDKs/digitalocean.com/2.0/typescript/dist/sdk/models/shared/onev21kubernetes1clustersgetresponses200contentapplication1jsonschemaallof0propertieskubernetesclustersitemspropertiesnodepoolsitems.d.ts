import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum {
    NoSchedule = "NoSchedule",
    PreferNoSchedule = "PreferNoSchedule",
    NoExecute = "NoExecute"
}
export declare class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaints extends SpeakeasyBase {
    effect?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaintsEffectEnum;
    key?: string;
    value?: string;
}
export declare class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsInput extends SpeakeasyBase {
    autoScale?: boolean;
    count: number;
    labels?: Record<string, any>;
    maxNodes?: number;
    minNodes?: number;
    name: string;
    size: string;
    tags?: string[];
    taints?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsTaints[];
}
