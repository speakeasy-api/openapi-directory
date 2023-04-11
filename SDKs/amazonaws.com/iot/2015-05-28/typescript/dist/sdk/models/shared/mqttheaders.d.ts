import { SpeakeasyBase } from "../../../internal/utils";
import { UserProperty } from "./userproperty";
/**
 * Specifies MQTT Version 5.0 headers information. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html"> MQTT</a> from Amazon Web Services IoT Core Developer Guide.
 */
export declare class MqttHeaders extends SpeakeasyBase {
    contentType?: string;
    correlationData?: string;
    messageExpiry?: string;
    payloadFormatIndicator?: string;
    responseTopic?: string;
    userProperties?: UserProperty[];
}
