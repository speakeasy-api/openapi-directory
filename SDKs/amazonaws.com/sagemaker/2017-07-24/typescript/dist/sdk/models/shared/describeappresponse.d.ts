import { SpeakeasyBase } from "../../../internal/utils";
import { AppStatusEnum } from "./appstatusenum";
import { AppTypeEnum } from "./apptypeenum";
import { ResourceSpec } from "./resourcespec";
/**
 * Success
 */
export declare class DescribeAppResponse extends SpeakeasyBase {
    appArn?: string;
    appName?: string;
    appType?: AppTypeEnum;
    creationTime?: Date;
    domainId?: string;
    failureReason?: string;
    lastHealthCheckTimestamp?: Date;
    lastUserActivityTimestamp?: Date;
    resourceSpec?: ResourceSpec;
    spaceName?: string;
    status?: AppStatusEnum;
    userProfileName?: string;
}
