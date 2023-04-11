import { SpeakeasyBase } from "../../../internal/utils";
import { OptInStatusEnum } from "./optinstatusenum";
/**
 *  Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight. You can use this to update the configuration.
 */
export declare class OpsCenterIntegrationConfig extends SpeakeasyBase {
    optInStatus?: OptInStatusEnum;
}
