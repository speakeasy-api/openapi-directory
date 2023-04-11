import { SpeakeasyBase } from "../../../internal/utils";
import { Payload } from "./payload";
/**
 * Information required to publish the Amazon SNS message.
 */
export declare class SNSTopicPublishAction extends SpeakeasyBase {
    payload?: Payload;
    targetArn: string;
}
