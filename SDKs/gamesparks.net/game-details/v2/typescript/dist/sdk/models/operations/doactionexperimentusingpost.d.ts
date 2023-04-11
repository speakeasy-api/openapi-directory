import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * action
 */
export declare enum DoActionExperimentUsingPOSTActionEnum {
    Start = "start",
    Stop = "stop",
    Publish = "publish",
    Unpublish = "unpublish"
}
export declare class DoActionExperimentUsingPOSTRequest extends SpeakeasyBase {
    /**
     * action
     */
    action: DoActionExperimentUsingPOSTActionEnum;
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * id
     */
    id: number;
}
export declare class DoActionExperimentUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    experimentModel?: shared.ExperimentModel;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
