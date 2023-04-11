import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceResolutionStatusTypeEnum } from "./resourceresolutionstatustypeenum";
/**
 * Success
 */
export declare class ResolveAppVersionResourcesResponse extends SpeakeasyBase {
    appArn: string;
    appVersion: string;
    resolutionId: string;
    status: ResourceResolutionStatusTypeEnum;
}
