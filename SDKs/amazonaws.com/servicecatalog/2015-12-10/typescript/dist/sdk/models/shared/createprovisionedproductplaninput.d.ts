import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductPlanTypeEnum } from "./provisionedproductplantypeenum";
import { Tag } from "./tag";
import { UpdateProvisioningParameter } from "./updateprovisioningparameter";
export declare class CreateProvisionedProductPlanInput extends SpeakeasyBase {
    acceptLanguage?: string;
    idempotencyToken: string;
    notificationArns?: string[];
    pathId?: string;
    planName: string;
    planType: ProvisionedProductPlanTypeEnum;
    productId: string;
    provisionedProductName: string;
    provisioningArtifactId: string;
    provisioningParameters?: UpdateProvisioningParameter[];
    tags?: Tag[];
}
