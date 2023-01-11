import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The region that the floating IP is reserved to. When you query a floating IP, the entire region object will be returned.
**/
export declare class Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion extends SpeakeasyBase {
    available: boolean;
    features: any;
    name: string;
    sizes: any;
    slug: string;
}
export declare class Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems extends SpeakeasyBase {
    droplet?: any;
    ip?: string;
    locked?: boolean;
    region?: Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion;
}
