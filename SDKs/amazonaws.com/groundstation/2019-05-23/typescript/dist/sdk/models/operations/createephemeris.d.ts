import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Ephemeris data.
 */
export declare class CreateEphemerisRequestBodyEphemeris extends SpeakeasyBase {
    /**
     * Ephemeris data in Orbit Ephemeris Message (OEM) format.
     */
    oem?: shared.OEMEphemeris;
    /**
     * Two-line element set (TLE) ephemeris.
     */
    tle?: shared.TLEEphemeris;
}
export declare class CreateEphemerisRequestBody extends SpeakeasyBase {
    /**
     * <p>Whether to set the ephemeris status to <code>ENABLED</code> after validation.</p> <p>Setting this to false will set the ephemeris status to <code>DISABLED</code> after validation.</p>
     */
    enabled?: boolean;
    /**
     * Ephemeris data.
     */
    ephemeris?: CreateEphemerisRequestBodyEphemeris;
    /**
     * An overall expiration time for the ephemeris in UTC, after which it will become <code>EXPIRED</code>.
     */
    expirationTime?: Date;
    /**
     * The ARN of a KMS key used to encrypt the ephemeris in Ground Station.
     */
    kmsKeyArn?: string;
    /**
     * A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.
     */
    name: string;
    /**
     * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p> <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p> <p>Priority must be 1 or greater</p>
     */
    priority?: number;
    /**
     * AWS Ground Station satellite ID for this ephemeris.
     */
    satelliteId: string;
    /**
     * Tags assigned to an ephemeris.
     */
    tags?: Record<string, string>;
}
export declare class CreateEphemerisRequest extends SpeakeasyBase {
    requestBody: CreateEphemerisRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateEphemerisResponse extends SpeakeasyBase {
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
