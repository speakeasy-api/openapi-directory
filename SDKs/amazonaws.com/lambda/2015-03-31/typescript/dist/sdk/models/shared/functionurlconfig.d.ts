import { SpeakeasyBase } from "../../../internal/utils";
import { Cors } from "./cors";
import { FunctionUrlAuthTypeEnum } from "./functionurlauthtypeenum";
/**
 * Details about a Lambda function URL.
 */
export declare class FunctionUrlConfig extends SpeakeasyBase {
    authType: FunctionUrlAuthTypeEnum;
    cors?: Cors;
    creationTime: string;
    functionArn: string;
    functionUrl: string;
    lastModifiedTime: string;
}
