import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateSAMLProviderRequest extends SpeakeasyBase {
    name: string;
    samlMetadataDocument: string;
    tags?: Tag[];
}
