import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RADIUS challenge reply
 */
export declare class RadiusChallengeResponse extends SpeakeasyBase {
    /**
     * HTTP status code
     */
    code: number;
    /**
     * Debug information
     */
    debugInfo?: string;
    /**
     * Internal error code
     */
    errorCode?: number;
    /**
     * HTTP status code description
     */
    message: string;
    /**
     * RADIUS Reply-Message
     *
     * @remarks
     *
     * Instruction how to handle the situation.
     */
    replyMessage: string;
    /**
     * For RADIUS Access-Challenge
     *
     * @remarks
     *
     * If a `replyState` is returned, it must be included as `state` in the following request.
     */
    replyState: string;
}
