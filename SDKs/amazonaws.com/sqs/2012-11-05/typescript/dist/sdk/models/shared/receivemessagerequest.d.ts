import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeNameListEnum } from "./attributenamelistenum";
/**
 * <p/>
 */
export declare class ReceiveMessageRequest extends SpeakeasyBase {
    attributeNames?: AttributeNameListEnum[];
    maxNumberOfMessages?: number;
    messageAttributeNames?: string[];
    queueUrl: string;
    receiveRequestAttemptId?: string;
    visibilityTimeout?: number;
    waitTimeSeconds?: number;
}
