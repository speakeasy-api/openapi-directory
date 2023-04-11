import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceResolutionStatusTypeEnum } from "./resourceresolutionstatustypeenum";
/**
 * Success
 */
export declare class DescribeAppVersionResourcesResolutionStatusResponse extends SpeakeasyBase {
    appArn: string;
    appVersion: string;
    errorMessage?: string;
    resolutionId: string;
    status: ResourceResolutionStatusTypeEnum;
}
