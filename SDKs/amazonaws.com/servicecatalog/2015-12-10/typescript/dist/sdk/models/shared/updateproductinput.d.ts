import { SpeakeasyBase } from "../../../internal/utils";
import { SourceConnection } from "./sourceconnection";
import { Tag } from "./tag";
export declare class UpdateProductInput extends SpeakeasyBase {
    acceptLanguage?: string;
    addTags?: Tag[];
    description?: string;
    distributor?: string;
    id: string;
    name?: string;
    owner?: string;
    removeTags?: string[];
    sourceConnection?: SourceConnection;
    supportDescription?: string;
    supportEmail?: string;
    supportUrl?: string;
}
