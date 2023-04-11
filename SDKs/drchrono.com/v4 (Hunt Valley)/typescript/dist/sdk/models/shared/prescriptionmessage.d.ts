import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Possible values are `Outgoing` and `Incoming`.
 */
export declare enum PrescriptionMessageMessageDirectionEnum {
    I = "I",
    O = "O"
}
/**
 * OK
 */
export declare class PrescriptionMessage extends SpeakeasyBase {
    createdAt?: string;
    doctor?: number;
    id?: number;
    /**
     * Data sent along with `NewRx`, `RefillRequest`, and `RefillResponses` messages. The format varies, but most likely it will contain `BenefitsCoordination` section with insurance info and `MedicationPrescribed` with medication info. `Patient`, `Pharmacy`, and `Prescriber` are also usually present.
     */
    jsonData?: string;
    /**
     * Possible values are `Outgoing` and `Incoming`.
     */
    messageDirection?: PrescriptionMessageMessageDirectionEnum;
    /**
     * Message status for Incoming and Outgoing values. Success message for message_type are: `NewRx` : `Sent`, `RefillRequest` : `Received`, `RefillResponse` : `Sent`.
     */
    messageStatus?: string;
    /**
     * Possible values are `NewRx` for outgoing new prescriptions, `RefillRequest` for incoming refill requests, `RefillResponse` for outgoing refill responses, `Error` for incoming errors, `Status` and `Verify` for incoming status reports from Surescripts.
     */
    messageType?: string;
    /**
     * Refers to the parent message, used for refill responses and incoming error/status reports.
     */
    parentMessage?: string;
    /**
     * An optional field which refers to a patient.
     */
    patient?: number;
    /**
     * NCPDPID allocated #ID of the Pharmacy
     */
    pharmacy?: string;
}
