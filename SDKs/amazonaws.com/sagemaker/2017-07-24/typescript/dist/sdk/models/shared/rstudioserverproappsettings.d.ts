import { SpeakeasyBase } from "../../../internal/utils";
import { RStudioServerProAccessStatusEnum } from "./rstudioserverproaccessstatusenum";
import { RStudioServerProUserGroupEnum } from "./rstudioserverprousergroupenum";
/**
 * A collection of settings that configure user interaction with the <code>RStudioServerPro</code> app. <code>RStudioServerProAppSettings</code> cannot be updated. The <code>RStudioServerPro</code> app must be deleted and a new one created to make any changes.
 */
export declare class RStudioServerProAppSettings extends SpeakeasyBase {
    accessStatus?: RStudioServerProAccessStatusEnum;
    userGroup?: RStudioServerProUserGroupEnum;
}
