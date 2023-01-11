import { SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogTypeEnum } from "./datacatalogtypeenum";
export declare class UpdateDataCatalogInput extends SpeakeasyBase {
    description?: string;
    name: string;
    parameters?: Record<string, string>;
    type: DataCatalogTypeEnum;
}
