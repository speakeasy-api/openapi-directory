import { SpeakeasyBase } from "../../../internal/utils";
import { AnswerMachineDetectionConfig } from "./answermachinedetectionconfig";
/**
 * The configuration used for outbound calls.
 */
export declare class OutboundCallConfig extends SpeakeasyBase {
    /**
     * Answering Machine Detection config
     */
    answerMachineDetectionConfig?: AnswerMachineDetectionConfig;
    /**
     * The identifier of the contact flow for the outbound call.
     */
    connectContactFlowId: string;
    /**
     * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
     */
    connectQueueId: string;
    /**
     * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
     */
    connectSourcePhoneNumber?: string;
}
