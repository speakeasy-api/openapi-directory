import { SpeakeasyBase } from "../../../internal/utils";
import { ProductModel } from "./productmodel";
/**
 * When everything is ok, the config data returned.
 */
export declare class ConfigModel extends SpeakeasyBase {
    configId?: string;
    description?: string;
    name?: string;
    order?: number;
    product?: ProductModel;
}
