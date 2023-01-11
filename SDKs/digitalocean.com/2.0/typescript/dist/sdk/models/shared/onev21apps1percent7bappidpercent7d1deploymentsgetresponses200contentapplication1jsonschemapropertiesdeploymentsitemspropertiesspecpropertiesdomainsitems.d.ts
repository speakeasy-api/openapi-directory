import { SpeakeasyBase } from "../../../internal/utils";
export declare enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItemsTypeEnum {
    Unspecified = "UNSPECIFIED",
    Default = "DEFAULT",
    Primary = "PRIMARY",
    Alias = "ALIAS"
}
export declare class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems extends SpeakeasyBase {
    domain: string;
    type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItemsTypeEnum;
    wildcard?: boolean;
    zone?: string;
}
