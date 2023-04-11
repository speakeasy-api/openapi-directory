import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateRuntimeOnEnum } from "./updateruntimeonenum";
/**
 * Success
 */
export declare class PutRuntimeManagementConfigResponse extends SpeakeasyBase {
    functionArn: string;
    runtimeVersionArn?: string;
    updateRuntimeOn: UpdateRuntimeOnEnum;
}
