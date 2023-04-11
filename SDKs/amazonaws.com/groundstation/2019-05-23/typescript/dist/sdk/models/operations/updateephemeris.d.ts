import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateEphemerisRequestBody extends SpeakeasyBase {
    /**
     * Whether the ephemeris is enabled or not. Changing this value will not require the ephemeris to be re-validated.
     */
    enabled: boolean;
    /**
     * A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.
     */
    name?: string;
    /**
     * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>
     */
    priority?: number;
}
export declare class UpdateEphemerisRequest extends SpeakeasyBase {
    requestBody: UpdateEphemerisRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The AWS Ground Station ephemeris ID.
     */
    ephemerisId: string;
}
export declare class UpdateEphemerisResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyException
     */
    dependencyException?: any;
    /**
     * Success
     */
    ephemerisIdResponse?: shared.EphemerisIdResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
