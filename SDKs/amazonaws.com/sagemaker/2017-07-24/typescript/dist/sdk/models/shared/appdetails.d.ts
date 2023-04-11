import { SpeakeasyBase } from "../../../internal/utils";
import { AppStatusEnum } from "./appstatusenum";
import { AppTypeEnum } from "./apptypeenum";
/**
 * Details about an Amazon SageMaker app.
 */
export declare class AppDetails extends SpeakeasyBase {
    appName?: string;
    appType?: AppTypeEnum;
    creationTime?: Date;
    domainId?: string;
    spaceName?: string;
    status?: AppStatusEnum;
    userProfileName?: string;
}
