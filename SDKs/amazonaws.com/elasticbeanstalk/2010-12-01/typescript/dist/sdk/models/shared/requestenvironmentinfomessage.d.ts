import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentInfoTypeEnum } from "./environmentinfotypeenum";
/**
 * Request to retrieve logs from an environment and store them in your Elastic Beanstalk storage bucket.
 */
export declare class RequestEnvironmentInfoMessage extends SpeakeasyBase {
    environmentId?: string;
    environmentName?: string;
    infoType: EnvironmentInfoTypeEnum;
}
