import { SpeakeasyBase } from "../../../internal/utils";
import { ProductModel } from "./productmodel";
/**
 * When everything is ok, the environment data returned.
 */
export declare class EnvironmentModel extends SpeakeasyBase {
    color?: string;
    description?: string;
    environmentId?: string;
    name?: string;
    order?: number;
    product?: ProductModel;
    reasonRequired?: boolean;
}
