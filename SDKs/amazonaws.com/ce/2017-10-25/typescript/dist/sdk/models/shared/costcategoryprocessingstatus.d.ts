import { SpeakeasyBase } from "../../../internal/utils";
import { CostCategoryStatusComponentEnum } from "./costcategorystatuscomponentenum";
import { CostCategoryStatusEnum } from "./costcategorystatusenum";
/**
 * The list of processing statuses for Cost Management products for a specific cost category.
 */
export declare class CostCategoryProcessingStatus extends SpeakeasyBase {
    component?: CostCategoryStatusComponentEnum;
    status?: CostCategoryStatusEnum;
}
