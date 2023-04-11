import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationModel } from "./organizationmodel";
/**
 * When the creation was successful.
 */
export declare class ProductModel extends SpeakeasyBase {
    description?: string;
    name?: string;
    order?: number;
    organization?: OrganizationModel;
    productId?: string;
    reasonRequired?: boolean;
}
