import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Includes the error code and error message for events that could not be ingested by CloudTrail.
 */
export declare class ResultErrorEntry extends SpeakeasyBase {
    errorCode: string;
    errorMessage: string;
    id: string;
}
