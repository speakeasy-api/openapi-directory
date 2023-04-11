import { SpeakeasyBase } from "../../../internal/utils";
import { CustomPluginStateEnum } from "./custompluginstateenum";
/**
 * Success
 */
export declare class DeleteCustomPluginResponse extends SpeakeasyBase {
    customPluginArn?: string;
    customPluginState?: CustomPluginStateEnum;
}
