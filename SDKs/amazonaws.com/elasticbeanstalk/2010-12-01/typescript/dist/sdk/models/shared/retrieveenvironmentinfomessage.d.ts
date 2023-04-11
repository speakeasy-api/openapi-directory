import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentInfoTypeEnum } from "./environmentinfotypeenum";
/**
 * Request to download logs retrieved with <a>RequestEnvironmentInfo</a>.
 */
export declare class RetrieveEnvironmentInfoMessage extends SpeakeasyBase {
    environmentId?: string;
    environmentName?: string;
    infoType: EnvironmentInfoTypeEnum;
}
