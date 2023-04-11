import { SpeakeasyBase } from "../../../internal/utils";
import { FiberOpticCableTypeEnum } from "./fiberopticcabletypeenum";
import { MaximumSupportedWeightLbsEnum } from "./maximumsupportedweightlbsenum";
import { OpticalStandardEnum } from "./opticalstandardenum";
import { PowerConnectorEnum } from "./powerconnectorenum";
import { PowerDrawKvaEnum } from "./powerdrawkvaenum";
import { PowerFeedDropEnum } from "./powerfeeddropenum";
import { PowerPhaseEnum } from "./powerphaseenum";
import { UplinkCountEnum } from "./uplinkcountenum";
import { UplinkGbpsEnum } from "./uplinkgbpsenum";
/**
 *  Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide.
 */
export declare class RackPhysicalProperties extends SpeakeasyBase {
    fiberOpticCableType?: FiberOpticCableTypeEnum;
    maximumSupportedWeightLbs?: MaximumSupportedWeightLbsEnum;
    opticalStandard?: OpticalStandardEnum;
    powerConnector?: PowerConnectorEnum;
    powerDrawKva?: PowerDrawKvaEnum;
    powerFeedDrop?: PowerFeedDropEnum;
    powerPhase?: PowerPhaseEnum;
    uplinkCount?: UplinkCountEnum;
    uplinkGbps?: UplinkGbpsEnum;
}
