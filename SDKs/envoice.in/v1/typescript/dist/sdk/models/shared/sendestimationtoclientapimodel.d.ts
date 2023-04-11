import { SpeakeasyBase } from "../../../internal/utils";
export declare class SendEstimationToClientApiModel extends SpeakeasyBase {
    /**
     * Should attach pdf file
     */
    attachPdf?: boolean;
    /**
     * Id of the estimation
     */
    estimationId?: number;
    /**
     * Id of the estimation
     */
    id?: number;
    /**
     * Message to be embedded in the email
     */
    message?: string;
    /**
     * Should email copy be send to self
     */
    sendToSelf?: boolean;
    /**
     * Subject for the email
     */
    subject?: string;
}
