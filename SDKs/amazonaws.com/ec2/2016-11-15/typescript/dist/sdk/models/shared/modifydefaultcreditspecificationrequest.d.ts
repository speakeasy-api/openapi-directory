import { SpeakeasyBase } from "../../../internal/utils";
import { UnlimitedSupportedInstanceFamilyEnum } from "./unlimitedsupportedinstancefamilyenum";
export declare class ModifyDefaultCreditSpecificationRequest extends SpeakeasyBase {
    cpuCredits: string;
    dryRun?: boolean;
    instanceFamily: UnlimitedSupportedInstanceFamilyEnum;
}
