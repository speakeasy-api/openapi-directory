import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceImportStatusTypeEnum } from "./resourceimportstatustypeenum";
/**
 * Success
 */
export declare class DescribeDraftAppVersionResourcesImportStatusResponse extends SpeakeasyBase {
    appArn: string;
    appVersion: string;
    errorMessage?: string;
    status: ResourceImportStatusTypeEnum;
    statusChangeTime: Date;
}
