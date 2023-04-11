import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bad request.
 */
export declare class ServiceError extends SpeakeasyBase {
    /**
     * An optional code classifying the error. Should be taken in the context of the http status code.
     */
    code?: number;
    /**
     * A description of the error.
     */
    message: string;
}
