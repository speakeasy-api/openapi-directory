import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the burstable performance instance whose credit option for CPU usage was successfully modified.
 */
export declare class ModifyInstanceCreditSpecificationResultSuccessfulInstanceCreditSpecifications extends SpeakeasyBase {
    instanceId?: string;
}
/**
 * The error code.
 */
export declare enum ModifyInstanceCreditSpecificationResultUnsuccessfulInstanceCreditSpecificationsErrorCodeEnum {
    InvalidInstanceIDMalformed = "InvalidInstanceID.Malformed",
    InvalidInstanceIDNotFound = "InvalidInstanceID.NotFound",
    IncorrectInstanceState = "IncorrectInstanceState",
    InstanceCreditSpecificationNotSupported = "InstanceCreditSpecification.NotSupported"
}
/**
 * The applicable error for the burstable performance instance whose credit option for CPU usage was not modified.
 */
export declare class ModifyInstanceCreditSpecificationResultUnsuccessfulInstanceCreditSpecificationsError extends SpeakeasyBase {
    code?: ModifyInstanceCreditSpecificationResultUnsuccessfulInstanceCreditSpecificationsErrorCodeEnum;
    message?: string;
}
/**
 * Describes the burstable performance instance whose credit option for CPU usage was not modified.
 */
export declare class ModifyInstanceCreditSpecificationResultUnsuccessfulInstanceCreditSpecifications extends SpeakeasyBase {
    error?: ModifyInstanceCreditSpecificationResultUnsuccessfulInstanceCreditSpecificationsError;
    instanceId?: string;
}
/**
 * Success
 */
export declare class ModifyInstanceCreditSpecificationResult extends SpeakeasyBase {
    successfulInstanceCreditSpecifications?: ModifyInstanceCreditSpecificationResultSuccessfulInstanceCreditSpecifications[];
    unsuccessfulInstanceCreditSpecifications?: ModifyInstanceCreditSpecificationResultUnsuccessfulInstanceCreditSpecifications[];
}
