import { SpeakeasyBase } from "../../../internal/utils";
import { MqttHeaders } from "./mqttheaders";
/**
 * Describes an action to republish to another topic.
 */
export declare class RepublishAction extends SpeakeasyBase {
    headers?: MqttHeaders;
    qos?: number;
    roleArn: string;
    topic: string;
}
