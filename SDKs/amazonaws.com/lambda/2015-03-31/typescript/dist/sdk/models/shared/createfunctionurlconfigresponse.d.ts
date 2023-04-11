import { SpeakeasyBase } from "../../../internal/utils";
import { Cors } from "./cors";
import { FunctionUrlAuthTypeEnum } from "./functionurlauthtypeenum";
/**
 * Success
 */
export declare class CreateFunctionUrlConfigResponse extends SpeakeasyBase {
    authType: FunctionUrlAuthTypeEnum;
    cors?: Cors;
    creationTime: string;
    functionArn: string;
    functionUrl: string;
}
