import { SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogTypeEnum } from "./datacatalogtypeenum";
import { Tag } from "./tag";
export declare class CreateDataCatalogInput extends SpeakeasyBase {
    description?: string;
    name: string;
    parameters?: Record<string, string>;
    tags?: Tag[];
    type: DataCatalogTypeEnum;
}
