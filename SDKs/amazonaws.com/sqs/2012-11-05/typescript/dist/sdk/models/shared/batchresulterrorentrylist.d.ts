import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Gives a detailed description of the result of an action on each entry in the request.
 */
export declare class BatchResultErrorEntryList extends SpeakeasyBase {
    code: string;
    id: string;
    message?: string;
    senderFault: boolean;
}
