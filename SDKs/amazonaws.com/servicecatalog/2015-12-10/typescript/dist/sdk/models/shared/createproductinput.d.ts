import { SpeakeasyBase } from "../../../internal/utils";
import { ProductTypeEnum } from "./producttypeenum";
import { ProvisioningArtifactProperties } from "./provisioningartifactproperties";
import { SourceConnection } from "./sourceconnection";
import { Tag } from "./tag";
export declare class CreateProductInput extends SpeakeasyBase {
    acceptLanguage?: string;
    description?: string;
    distributor?: string;
    idempotencyToken: string;
    name: string;
    owner: string;
    productType: ProductTypeEnum;
    provisioningArtifactParameters?: ProvisioningArtifactProperties;
    sourceConnection?: SourceConnection;
    supportDescription?: string;
    supportEmail?: string;
    supportUrl?: string;
    tags?: Tag[];
}
