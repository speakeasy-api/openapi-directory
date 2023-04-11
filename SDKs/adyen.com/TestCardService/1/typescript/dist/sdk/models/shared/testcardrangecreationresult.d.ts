import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Notification message. It informs about the outcome of the operation. Possible values:
 *
 * @remarks
 * * CREATED
 * * ALREADY_EXISTS
 * * ERROR
 */
export declare enum TestCardRangeCreationResultCreationResultCodeEnum {
    AlreadyExists = "ALREADY_EXISTS",
    Created = "CREATED",
    Error = "ERROR"
}
export declare class TestCardRangeCreationResult extends SpeakeasyBase {
    /**
     * The last test card number in the generated test card range.
     *
     * @remarks
     *
     * Example: 5432 1234 1234 4321
     */
    cardNumberRangeEnd: string;
    /**
     * The first test card number in the generated test card range.
     *
     * @remarks
     *
     * Example: 5432 1234 1234 1234
     */
    cardNumberRangeStart: string;
    /**
     * Notification message. It informs about the outcome of the operation. Possible values:
     *
     * @remarks
     * * CREATED
     * * ALREADY_EXISTS
     * * ERROR
     */
    creationResultCode: TestCardRangeCreationResultCreationResultCodeEnum;
    /**
     * An optional information message about the result.
     */
    message?: string;
}
