import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductPlanStatusEnum } from "./provisionedproductplanstatusenum";
import { ProvisionedProductPlanTypeEnum } from "./provisionedproductplantypeenum";
import { Tag } from "./tag";
import { UpdateProvisioningParameter } from "./updateprovisioningparameter";
/**
 * Information about a plan.
 */
export declare class ProvisionedProductPlanDetails extends SpeakeasyBase {
    createdTime?: Date;
    notificationArns?: string[];
    pathId?: string;
    planId?: string;
    planName?: string;
    planType?: ProvisionedProductPlanTypeEnum;
    productId?: string;
    provisionProductId?: string;
    provisionProductName?: string;
    provisioningArtifactId?: string;
    provisioningParameters?: UpdateProvisioningParameter[];
    status?: ProvisionedProductPlanStatusEnum;
    statusMessage?: string;
    tags?: Tag[];
    updatedTime?: Date;
}
