import { SpeakeasyBase } from "../../../internal/utils";
import { DashboardAttributes } from "./dashboardattributes";
import { FeatureStatusEnum } from "./featurestatusenum";
import { GuardianAttributes } from "./guardianattributes";
/**
 * The VDM attributes that apply to your Amazon SES account.
 */
export declare class VdmAttributes extends SpeakeasyBase {
    dashboardAttributes?: DashboardAttributes;
    guardianAttributes?: GuardianAttributes;
    vdmEnabled: FeatureStatusEnum;
}
